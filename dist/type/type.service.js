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
exports.TypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const type_entity_1 = require("./entities/type.entity");
let TypeService = class TypeService {
    constructor(typeRepository) {
        this.typeRepository = typeRepository;
    }
    async create(type) {
        try {
            return await this.typeRepository.insert(type);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno, consulte con los administradores.');
        }
    }
    async findByName(name) {
        return await this.typeRepository.findOne({ where: { name } });
    }
    async deleteAll() {
        try {
            await this.typeRepository.createQueryBuilder().delete().from(type_entity_1.Type).execute();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno');
        }
    }
};
TypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(type_entity_1.Type)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeService);
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map