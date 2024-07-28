import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { Model } from 'mongoose';
import { PostQueryDto } from './dto/post-query.dto';
export declare class PostsService {
    private postModel;
    constructor(postModel: Model<Post>);
    create(createPostDto: CreatePostDto): Promise<import("mongoose").Document<unknown, {}, Post> & Post & Required<{
        _id: unknown;
    }>>;
    findAll(queryParams?: PostQueryDto): Promise<Post[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Post> & Post & Required<{
        _id: unknown;
    }>>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<import("mongoose").UpdateWriteOpResult>;
    deletePost(id: string, userId: string): Promise<any>;
}
