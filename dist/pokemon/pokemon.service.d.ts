import { PaginationDto } from 'src/common/pagination.dto';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { IPokemon, IPokemonTypes } from 'src/seed/data/pokemons';
import { TypeService } from 'src/type/type.service';
export declare class PokemonService {
    private pokemonRepository;
    private typeService;
    constructor(pokemonRepository: Repository<Pokemon>, typeService: TypeService);
    create(pokemon: IPokemon): Promise<void>;
    saveCategory(pokemonTypes: IPokemonTypes): Promise<void>;
    findPokemons(paginationDto: PaginationDto): Promise<Pokemon[]>;
    update(pokemon: IPokemon): Promise<void>;
    findOne(criteria: string): Promise<Pokemon | Pokemon[]>;
    deleteAll(): Promise<void>;
}
