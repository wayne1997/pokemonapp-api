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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pokemon_entity_1 = require("./entities/pokemon.entity");
const uuid_1 = require("uuid");
const type_service_1 = require("../type/type.service");
let PokemonService = class PokemonService {
    constructor(pokemonRepository, typeService) {
        this.pokemonRepository = pokemonRepository;
        this.typeService = typeService;
    }
    async create(pokemon) {
        try {
            await this.pokemonRepository.insert(pokemon);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno al crear un pokemon.');
        }
    }
    async saveCategory(pokemonTypes) {
        try {
            const savedTypes = [];
            pokemonTypes.types.forEach(async (type) => {
                savedTypes.push(await this.typeService.findByName(type));
            });
            const pokemonSavedTypes = await this.pokemonRepository.findOne({ where: { name: pokemonTypes.name } });
            await this.pokemonRepository.createQueryBuilder()
                .relation(pokemon_entity_1.Pokemon, 'types')
                .of(pokemonSavedTypes)
                .add(savedTypes);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al agregar las categorias');
        }
    }
    findPokemons(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        return this.pokemonRepository.find({
            take: limit,
            skip: offset,
            relations: {
                types: true,
            }
        });
    }
    async update(pokemon) {
        try {
            const pokemonEvolution = await this.pokemonRepository.findOne({ where: { id: pokemon.evolutionId } });
            await this.pokemonRepository.createQueryBuilder()
                .update(pokemon_entity_1.Pokemon)
                .set({ evolution: pokemonEvolution })
                .where("name= :name", { name: pokemon.name })
                .execute();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno al crear un pokemon.');
        }
    }
    async findOne(criteria) {
        let pokemon;
        if ((0, uuid_1.validate)(criteria))
            return await this.pokemonRepository.find({ relations: { types: true, evolution: true }, where: { id: criteria } });
        else {
            const queryBuilder = this.pokemonRepository.createQueryBuilder('poke');
            pokemon = await queryBuilder.where('poke.name =:criteria', {
                criteria: criteria
            })
                .leftJoinAndSelect('poke.evolution', 'pokeEvolution')
                .leftJoinAndSelect('poke.types', 'pokeTypes')
                .getOne();
        }
        if (!pokemon) {
            throw new common_1.NotFoundException(`Pokemon with criteria <<${criteria}>> was not found!`);
        }
        return pokemon;
    }
    async deleteAll() {
        try {
            await this.pokemonRepository.createQueryBuilder().delete().from(pokemon_entity_1.Pokemon).execute();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno');
        }
    }
};
PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pokemon_entity_1.Pokemon)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        type_service_1.TypeService])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map