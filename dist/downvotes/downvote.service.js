"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownVotesService = void 0;
const common_1 = require("@nestjs/common");
let DownVotesService = class DownVotesService {
    create(createDislikeDto) {
        return 'This action adds a new dislike';
    }
    findAll() {
        return `This action returns all dislikes`;
    }
    findOne(id) {
        return `This action returns a #${id} dislike`;
    }
    update(id, updateDislikeDto) {
        return `This action updates a #${id} dislike`;
    }
    remove(id) {
        return `This action removes a #${id} dislike`;
    }
};
exports.DownVotesService = DownVotesService;
exports.DownVotesService = DownVotesService = __decorate([
    (0, common_1.Injectable)()
], DownVotesService);
//# sourceMappingURL=downvote.service.js.map