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
exports.UpvotesController = void 0;
const common_1 = require("@nestjs/common");
const upvotes_service_1 = require("./upvotes.service");
const create_upvote_dto_1 = require("./dto/create-upvote.dto");
const update_upvote_dto_1 = require("./dto/update-upvote.dto");
let UpvotesController = class UpvotesController {
    constructor(likesService) {
        this.likesService = likesService;
    }
    create(createLikeDto) {
        return this.likesService.create(createLikeDto);
    }
    findAll() {
        return this.likesService.findAll();
    }
    findOne(id) {
        return this.likesService.findOne(+id);
    }
    update(id, updateLikeDto) {
        return this.likesService.update(+id, updateLikeDto);
    }
    remove(id) {
        return this.likesService.remove(+id);
    }
};
exports.UpvotesController = UpvotesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_upvote_dto_1.CreateUpvoteDto]),
    __metadata("design:returntype", void 0)
], UpvotesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UpvotesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UpvotesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_upvote_dto_1.UpdateUpvoteDto]),
    __metadata("design:returntype", void 0)
], UpvotesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UpvotesController.prototype, "remove", null);
exports.UpvotesController = UpvotesController = __decorate([
    (0, common_1.Controller)('upvotes'),
    __metadata("design:paramtypes", [upvotes_service_1.UpvotesService])
], UpvotesController);
//# sourceMappingURL=upvotes.controller.js.map