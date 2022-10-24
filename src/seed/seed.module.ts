import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { TypeModule } from 'src/type/type.module';

@Module({
  imports: [ 
    PokemonModule,
    TypeModule
  ],
  controllers: [SeedController],
  providers: [SeedService]
})
export class SeedModule {}
