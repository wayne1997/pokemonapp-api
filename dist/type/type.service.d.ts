import { ITypes } from 'src/seed/data/types';
import { Repository } from 'typeorm';
import { Type } from './entities/type.entity';
export declare class TypeService {
    private typeRepository;
    constructor(typeRepository: Repository<Type>);
    create(type: ITypes): Promise<import("typeorm").InsertResult>;
    findByName(name: string): Promise<Type>;
    deleteAll(): Promise<void>;
}
