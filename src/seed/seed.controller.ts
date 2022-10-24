import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { SeedService } from './seed.service';

@ApiTags('Llenar la base de datos')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}
  
  
  
  @Get()
  populatePokemonTable() {
    return this.seedService.runSeed();
  }
}
