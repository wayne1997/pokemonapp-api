import { Injectable } from '@nestjs/common';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { TypeService } from 'src/type/type.service';
import { IPokemonTypes, PokemonsData, pokemonTypes } from './data/pokemons';
import { typesData } from './data/types';

@Injectable()
export class SeedService {

  constructor( private pokemonService: PokemonService, private typeService: TypeService ){}
  
  async runSeed(){
    await this.seedPokemonTable();
    await this.updatePokemons();
    await this.seedTypes();
    await this.saveTypes();
    return 'Base de datos restaurada';
  }

  private async seedPokemonTable() {
    await this.pokemonService.deleteAll();
    const seedPokemons = PokemonsData;
    const insertPromises = [];
    seedPokemons.forEach( pokemon => {
      insertPromises.push( this.pokemonService.create( pokemon ) );
    });
    await Promise.all( insertPromises );
    return true;
  }

  private async updatePokemons() {
    const updatablePokemons = PokemonsData.filter( pokemon => pokemon.evolutionId != null);
    const updatePromises = [];
    updatablePokemons.forEach( pokemon => {
      updatePromises.push(this.pokemonService.update( pokemon ));
    });
    await Promise.all( updatePromises );
    return true;
  }

  private async seedTypes(){
    await this.typeService.deleteAll();
    const seedTypes = typesData;
    const insertedTypes = [];
    seedTypes.forEach( type => {
      insertedTypes.push( this.typeService.create(type) );
    });
    await Promise.all( insertedTypes );
    return true;
  }

  private async saveTypes(){

    const typesSeedPokemon: IPokemonTypes[] = pokemonTypes;
    const insertedPokemonTypes = [];
    typesSeedPokemon.forEach( type => {
      insertedPokemonTypes.push( this.pokemonService.saveCategory( type ) );
    } );
    await Promise.all( insertedPokemonTypes );
    return true;
    
  }

}
