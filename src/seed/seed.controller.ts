import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiExcludeController, ApiExcludeEndpoint, ApiParam, ApiTags } from '@nestjs/swagger';
import { SeedService } from './seed.service';

@ApiExcludeController()
@ApiTags('Llenar la base de datos')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}
  
  @ApiExcludeEndpoint()
  @Get()
  async populatePokemonTable() {
    return await this.seedService.runSeed();
  }
}
