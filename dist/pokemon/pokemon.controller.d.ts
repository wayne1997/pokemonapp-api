import { PaginationDto } from 'src/common/pagination.dto';
import { PokemonService } from './pokemon.service';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    findAll(paginationDto: PaginationDto): Promise<import("./entities/pokemon.entity").Pokemon[]>;
    findOne(criteria: string): Promise<import("./entities/pokemon.entity").Pokemon | import("./entities/pokemon.entity").Pokemon[]>;
}
