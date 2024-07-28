"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const exceptions_filter_1 = require("./middlewares/exceptions.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1/');
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new exceptions_filter_1.AllExceptionFilters());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Hospyta API')
        .setDescription('Hospyta API Documentation')
        .setVersion('1.0')
        .addTag('API')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/v1/docs', app, document);
    await app.listen(Number(process.env.PORT) || 6000);
}
bootstrap();
//# sourceMappingURL=main.js.map