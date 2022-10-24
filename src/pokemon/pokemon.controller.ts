import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/pagination.dto';
import { PokemonService } from './pokemon.service';

@ApiTags('Pokemones')
@Controller('pokemon')
export class PokemonController {

  constructor(private readonly pokemonService: PokemonService) {}
  
  @Get()
  findAll( @Query() paginationDto: PaginationDto ) {
    return this.pokemonService.findPokemons( paginationDto );
  }

  @Get(':criteria')
  @ApiParam({name: 'criteria', required: true, description: 'Puede enviar el nombre del pokemon o su id'})
  findOne( @Param('criteria') criteria: string) {
    return this.pokemonService.findOne( criteria );
  }
}
