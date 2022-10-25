import { Type } from 'src/type/entities/type.entity';
export declare class Pokemon {
    id: string;
    name: string;
    description: string;
    size: number;
    weigth: number;
    image: string;
    types: Type[];
    evolution: Pokemon;
}
