import { Document, Schema as MongooseSchema } from "mongoose";
import { Post } from "src/posts/entities/post.entity";
import { Reply } from "src/replies/entities/reply.entity";
import { User } from "src/users/entities/user.entity";
export declare class Downvote extends Document {
    user: User;
    post?: Post;
    reply: Reply;
}
export declare const DownvoteSchema: MongooseSchema<Downvote, import("mongoose").Model<Downvote, any, any, any, Document<unknown, any, Downvote> & Downvote & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Downvote, Document<unknown, {}, import("mongoose").FlatRecord<Downvote>> & import("mongoose").FlatRecord<Downvote> & Required<{
    _id: unknown;
}>>;
