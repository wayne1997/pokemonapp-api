export declare const PokemonsData: IPokemon[];
export declare const pokemonTypes: IPokemonTypes[];
export interface IPokemonTypes {
    name: string;
    types: string[];
}
export interface IPokemon {
    id?: string;
    name: string;
    description: string;
    size: number;
    weigth: number;
    image: string;
    evolutionId?: string;
}
