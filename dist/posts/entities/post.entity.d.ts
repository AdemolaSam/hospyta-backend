import { User } from "src/users/entities/user.entity";
import { Document, Schema as MongooseSchema } from "mongoose";
export declare class Post extends Document {
    title: string;
    content: string;
    author: User;
    imageUrl: string;
    category: string;
}
export declare const PostSchema: MongooseSchema<Post, import("mongoose").Model<Post, any, any, any, Document<unknown, any, Post> & Post & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Post, Document<unknown, {}, import("mongoose").FlatRecord<Post>> & import("mongoose").FlatRecord<Post> & Required<{
    _id: unknown;
}>>;
