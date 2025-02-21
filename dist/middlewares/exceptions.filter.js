"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilters = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionFilters = class AllExceptionFilters {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        console.error(exception);
        response.status(status).json({
            statusCode: status,
            timeStamp: new Date().toISOString(),
            path: request.url,
            message: exception instanceof common_1.HttpException
                ? exception.message
                : 'Internal Server Error'
        });
    }
};
exports.AllExceptionFilters = AllExceptionFilters;
exports.AllExceptionFilters = AllExceptionFilters = __decorate([
    (0, common_1.Catch)()
], AllExceptionFilters);
//# sourceMappingURL=exceptions.filter.js.map