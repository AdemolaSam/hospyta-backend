"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUpvoteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_upvote_dto_1 = require("./create-upvote.dto");
class UpdateUpvoteDto extends (0, mapped_types_1.PartialType)(create_upvote_dto_1.CreateUpvoteDto) {
}
exports.UpdateUpvoteDto = UpdateUpvoteDto;
//# sourceMappingURL=update-upvote.dto.js.map