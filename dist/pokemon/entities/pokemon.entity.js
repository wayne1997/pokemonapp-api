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
var Pokemon_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
const type_entity_1 = require("../../type/entities/type.entity");
const typeorm_1 = require("typeorm");
let Pokemon = Pokemon_1 = class Pokemon {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Pokemon.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
        unique: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], Pokemon.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 500,
        unique: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], Pokemon.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'float',
        default: 0.0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Pokemon.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'float',
        default: 0.0,
        nullable: true,
    }),
    __metadata("design:type", Number)
], Pokemon.prototype, "weigth", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], Pokemon.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => type_entity_1.Type, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Pokemon.prototype, "types", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Pokemon_1, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Pokemon)
], Pokemon.prototype, "evolution", void 0);
Pokemon = Pokemon_1 = __decorate([
    (0, typeorm_1.Entity)()
], Pokemon);
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.entity.js.map