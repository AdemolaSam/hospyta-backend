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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const post_entity_1 = require("./entities/post.entity");
const mongoose_2 = require("mongoose");
let PostsService = class PostsService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async create(createPostDto) {
        const post = await this.postModel.create(createPostDto);
        return post;
    }
    async findAll(queryParams) {
        const { page = 1, limit = 10, author, category, mostUpvoted } = queryParams;
        const filters = {};
        if (author) {
            filters.author = author;
        }
        if (category) {
            filters.category = category;
        }
        let postsQuery = this.postModel.find(filters);
        if (mostUpvoted) {
            postsQuery = postsQuery.sort({ likesCount: -1 });
        }
        postsQuery = postsQuery.skip((page - 1) * limit).limit(limit);
        return postsQuery.exec();
    }
    async findOne(id) {
        return await this.postModel.findById(id);
    }
    async update(id, updatePostDto) {
        return await this.postModel.updateOne(updatePostDto);
    }
    async deletePost(id, userId) {
        const post = await this.postModel.findById(id);
        if (post.author.id !== userId) {
            throw new common_1.UnauthorizedException();
        }
        return await this.postModel.deleteOne({ _id: id });
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_entity_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostsService);
//# sourceMappingURL=posts.service.js.map