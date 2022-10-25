"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const pokemon_service_1 = require("../pokemon/pokemon.service");
const type_service_1 = require("../type/type.service");
const pokemons_1 = require("./data/pokemons");
const types_1 = require("./data/types");
let SeedService = class SeedService {
    constructor(pokemonService, typeService) {
        this.pokemonService = pokemonService;
        this.typeService = typeService;
    }
    async runSeed() {
        await this.seedPokemonTable();
        await this.updatePokemons();
        await this.seedTypes();
        await this.saveTypes();
        return 'Base de datos restaurada';
    }
    async seedPokemonTable() {
        await this.pokemonService.deleteAll();
        const seedPokemons = pokemons_1.PokemonsData;
        const insertPromises = [];
        seedPokemons.forEach(pokemon => {
            insertPromises.push(this.pokemonService.create(pokemon));
        });
        await Promise.all(insertPromises);
        return true;
    }
    async updatePokemons() {
        const updatablePokemons = pokemons_1.PokemonsData.filter(pokemon => pokemon.evolutionId != null);
        const updatePromises = [];
        updatablePokemons.forEach(pokemon => {
            updatePromises.push(this.pokemonService.update(pokemon));
        });
        await Promise.all(updatePromises);
        return true;
    }
    async seedTypes() {
        await this.typeService.deleteAll();
        const seedTypes = types_1.typesData;
        const insertedTypes = [];
        seedTypes.forEach(type => {
            insertedTypes.push(this.typeService.create(type));
        });
        await Promise.all(insertedTypes);
        return true;
    }
    async saveTypes() {
        const typesSeedPokemon = pokemons_1.pokemonTypes;
        const insertedPokemonTypes = [];
        typesSeedPokemon.forEach(type => {
            insertedPokemonTypes.push(this.pokemonService.saveCategory(type));
        });
        await Promise.all(insertedPokemonTypes);
        return true;
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService, type_service_1.TypeService])
], SeedService);
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map