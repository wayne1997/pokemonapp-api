"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('Bootstrap');
    app.enableCors();
    app.setGlobalPrefix('pokeapi/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Pokemon API')
        .setDescription('Este es un API pertenece al PokeAPI Challenge. Elaborado por Jonathan Chiriboga.')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('pokeapi/documentation', app, document);
    await app.listen(process.env.PORT);
    logger.log(`App runnin on port ${process.env.PORT}`);
}
main();
//# sourceMappingURL=main.js.map