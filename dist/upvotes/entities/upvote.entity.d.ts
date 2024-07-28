import { User } from "src/users/entities/user.entity";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Post } from "src/posts/entities/post.entity";
import { Reply } from "src/replies/entities/reply.entity";
export declare class Upvote extends Document {
    user: User;
    post?: Post;
    reply: Reply;
}
export declare const UpvoteSchema: MongooseSchema<Upvote, import("mongoose").Model<Upvote, any, any, any, Document<unknown, any, Upvote> & Upvote & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Upvote, Document<unknown, {}, import("mongoose").FlatRecord<Upvote>> & import("mongoose").FlatRecord<Upvote> & Required<{
    _id: unknown;
}>>;
