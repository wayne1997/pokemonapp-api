import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon } from './entities/pokemon.entity';
import { TypeModule } from 'src/type/type.module';


@Module({
  imports:[
    TypeModule,
    TypeOrmModule.forFeature([ Pokemon ]),
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [
    PokemonService
  ]
})
export class PokemonModule {}
