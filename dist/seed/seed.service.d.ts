import { PokemonService } from 'src/pokemon/pokemon.service';
import { TypeService } from 'src/type/type.service';
export declare class SeedService {
    private pokemonService;
    private typeService;
    constructor(pokemonService: PokemonService, typeService: TypeService);
    runSeed(): Promise<string>;
    private seedPokemonTable;
    private updatePokemons;
    private seedTypes;
    private saveTypes;
}
