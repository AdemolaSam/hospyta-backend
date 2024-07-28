"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepliesModule = void 0;
const common_1 = require("@nestjs/common");
const replies_service_1 = require("./replies.service");
const replies_controller_1 = require("./replies.controller");
const mongoose_1 = require("@nestjs/mongoose");
const reply_entity_1 = require("./entities/reply.entity");
let RepliesModule = class RepliesModule {
};
exports.RepliesModule = RepliesModule;
exports.RepliesModule = RepliesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: reply_entity_1.Reply.name, schema: reply_entity_1.ReplySchema }])],
        controllers: [replies_controller_1.RepliesController],
        providers: [replies_service_1.RepliesService],
    })
], RepliesModule);
//# sourceMappingURL=replies.module.js.map