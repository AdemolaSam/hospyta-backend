"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDownvoteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_downvote_dto_1 = require("./create-downvote.dto");
class UpdateDownvoteDto extends (0, mapped_types_1.PartialType)(create_downvote_dto_1.CreateDownvoteDto) {
}
exports.UpdateDownvoteDto = UpdateDownvoteDto;
//# sourceMappingURL=update-downvote.dto.js.map