"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownvoteModule = void 0;
const common_1 = require("@nestjs/common");
const downvote_service_1 = require("./downvote.service");
const downvotes_controller_1 = require("./downvotes.controller");
const mongoose_1 = require("@nestjs/mongoose");
const downvote_entity_1 = require("./entities/downvote.entity");
let DownvoteModule = class DownvoteModule {
};
exports.DownvoteModule = DownvoteModule;
exports.DownvoteModule = DownvoteModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: downvote_entity_1.Downvote.name, schema: downvote_entity_1.DownvoteSchema }])],
        controllers: [downvotes_controller_1.DownvotesController],
        providers: [downvote_service_1.DownVotesService],
    })
], DownvoteModule);
//# sourceMappingURL=downvotes.module.js.map