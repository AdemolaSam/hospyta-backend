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
exports.DownvotesController = void 0;
const common_1 = require("@nestjs/common");
const downvote_service_1 = require("./downvote.service");
const create_downvote_dto_1 = require("./dto/create-downvote.dto");
const update_downvote_dto_1 = require("./dto/update-downvote.dto");
let DownvotesController = class DownvotesController {
    constructor(dislikesService) {
        this.dislikesService = dislikesService;
    }
    create(createDislikeDto) {
        return this.dislikesService.create(createDislikeDto);
    }
    findAll() {
        return this.dislikesService.findAll();
    }
    findOne(id) {
        return this.dislikesService.findOne(+id);
    }
    update(id, updateDislikeDto) {
        return this.dislikesService.update(+id, updateDislikeDto);
    }
    remove(id) {
        return this.dislikesService.remove(+id);
    }
};
exports.DownvotesController = DownvotesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_downvote_dto_1.CreateDownvoteDto]),
    __metadata("design:returntype", void 0)
], DownvotesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DownvotesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DownvotesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_downvote_dto_1.UpdateDownvoteDto]),
    __metadata("design:returntype", void 0)
], DownvotesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DownvotesController.prototype, "remove", null);
exports.DownvotesController = DownvotesController = __decorate([
    (0, common_1.Controller)('downvotes'),
    __metadata("design:paramtypes", [downvote_service_1.DownVotesService])
], DownvotesController);
//# sourceMappingURL=downvotes.controller.js.map