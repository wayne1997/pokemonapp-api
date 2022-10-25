import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository  } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/pagination.dto';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';

import { validate as isUUID } from 'uuid'; 
import { IPokemon, IPokemonTypes } from 'src/seed/data/pokemons';
import { ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { Type } from 'src/type/entities/type.entity';
import { TypeService } from 'src/type/type.service';


@Injectable()
export class PokemonService {

  constructor( 
    @InjectRepository( Pokemon ) private pokemonRepository: Repository<Pokemon>,
    private typeService: TypeService,
    ){}

  async create( pokemon: IPokemon ) {
     try{
      await this.pokemonRepository.insert(pokemon);
     }catch(error){
       throw new InternalServerErrorException('Error interno al crear un pokemon.');
     }
  }


  async saveCategory(pokemonTypes: IPokemonTypes) {
    try{
      
      const savedTypes: Type[] = [];
      pokemonTypes.types.forEach(async (type) => {
        savedTypes.push(await this.typeService.findByName(type));
      });
      const pokemonSavedTypes = await this.pokemonRepository.findOne({ where: { name: pokemonTypes.name } });
      // await this.pokemonRepository.createQueryBuilder()
      //   .relation(Pokemon, 'types')
      //   .of(pokemonSavedTypes)
      //   .add(savedTypes);

      pokemonSavedTypes.types.push(...savedTypes);
      await this.pokemonRepository.save(pokemonSavedTypes);
    }catch(error){
      throw new InternalServerErrorException(`${error} sembrando los tipos`);
    }
  }

  findPokemons( paginationDto: PaginationDto ) {
    const { limit=10, offset= 0} = paginationDto;
    return this.pokemonRepository.find({
      take: limit,
      skip: offset,
      relations: {
        types: true,
      }
    });
  }

  async update( pokemon: IPokemon ){

    try{
        const pokemonEvolution = await this.pokemonRepository.findOne({where: {id: pokemon.evolutionId}});
        await this.pokemonRepository.createQueryBuilder()
        .update(Pokemon)
        .set({ evolution: pokemonEvolution })
        .where( "name= :name", {name: pokemon.name})
        .execute();
    }catch( error ){
      throw new InternalServerErrorException('Error interno al crear un pokemon.');
    }

  }

  async findOne(criteria: string) {
    let pokemon: Pokemon;
    if( isUUID( criteria ) ) return await this.pokemonRepository.find({relations: { types: true, evolution: true}, where: { id: criteria}});
    else {
      const queryBuilder =  this.pokemonRepository.createQueryBuilder('poke');
      pokemon = await queryBuilder.where( 'poke.name =:criteria', {
        criteria: criteria
      })
      .leftJoinAndSelect('poke.evolution', 'pokeEvolution')
      .leftJoinAndSelect('poke.types', 'pokeTypes')
      .getOne();
    }
    if( !pokemon ){
      throw new NotFoundException(`Pokemon with criteria <<${criteria}>> was not found!`);
    }
    return pokemon;
  }

  async deleteAll(){
   try{
    await this.pokemonRepository.createQueryBuilder().delete().from(Pokemon).execute();
   }catch(error){
      throw new InternalServerErrorException('Error interno');
   }
  }
}
