import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITypes } from 'src/seed/data/types';
import { Repository } from 'typeorm';
import { Type } from './entities/type.entity';

@Injectable()
export class TypeService {
  constructor( @InjectRepository( Type ) private typeRepository: Repository<Type> ){}
  
  
  async create(type: ITypes) {
    try{
     return await this.typeRepository.insert(type);
    }catch(error){
      throw new InternalServerErrorException('Error interno, consulte con los administradores.');
    }
  }

  async findByName(name: string) {
    return await this.typeRepository.findOne({where: {name}});
  }

  async deleteAll() {
    try{
      await this.typeRepository.createQueryBuilder().delete().from(Type).execute();
     }catch(error){
        throw new InternalServerErrorException('Error interno');
     }
  }
}
