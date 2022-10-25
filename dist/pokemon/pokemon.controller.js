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
exports.PokemonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../common/pagination.dto");
const pokemon_service_1 = require("./pokemon.service");
let PokemonController = class PokemonController {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }
    findAll(paginationDto) {
        return this.pokemonService.findPokemons(paginationDto);
    }
    findOne(criteria) {
        return this.pokemonService.findOne(criteria);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':criteria'),
    (0, swagger_1.ApiParam)({ name: 'criteria', required: true, description: 'Puede enviar el nombre del pokemon o su id' }),
    __param(0, (0, common_1.Param)('criteria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "findOne", null);
PokemonController = __decorate([
    (0, swagger_1.ApiTags)('Pokemones'),
    (0, common_1.Controller)('pokemon'),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonController);
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemon.controller.js.map