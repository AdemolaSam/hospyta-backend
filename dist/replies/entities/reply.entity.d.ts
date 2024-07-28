import { Post } from "src/posts/entities/post.entity";
import { User } from "src/users/entities/user.entity";
import { Document, Schema as MongooseSchema } from "mongoose";
export declare class Reply extends Document {
    comment: string;
    author: User;
    post: Post;
    parentReply?: Reply;
}
export declare const ReplySchema: MongooseSchema<Reply, import("mongoose").Model<Reply, any, any, any, Document<unknown, any, Reply> & Reply & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reply, Document<unknown, {}, import("mongoose").FlatRecord<Reply>> & import("mongoose").FlatRecord<Reply> & Required<{
    _id: unknown;
}>>;
