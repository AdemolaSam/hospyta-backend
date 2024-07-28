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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplySchema = exports.Reply = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const post_entity_1 = require("../../posts/entities/post.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const mongoose_2 = require("mongoose");
let Reply = class Reply extends mongoose_2.Document {
};
exports.Reply = Reply;
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Reply.prototype, "comment", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }),
    __metadata("design:type", user_entity_1.User)
], Reply.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }),
    __metadata("design:type", post_entity_1.Post)
], Reply.prototype, "post", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Reply'
    }),
    __metadata("design:type", Reply)
], Reply.prototype, "parentReply", void 0);
exports.Reply = Reply = __decorate([
    (0, mongoose_1.Schema)()
], Reply);
exports.ReplySchema = mongoose_1.SchemaFactory.createForClass(Reply);
//# sourceMappingURL=reply.entity.js.map