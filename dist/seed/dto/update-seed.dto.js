"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeedDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_seed_dto_1 = require("./create-seed.dto");
class UpdateSeedDto extends (0, swagger_1.PartialType)(create_seed_dto_1.CreateSeedDto) {
}
exports.UpdateSeedDto = UpdateSeedDto;
//# sourceMappingURL=update-seed.dto.js.map