import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostQueryDto } from './dto/post-query.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: unknown;
    }>>;
    findAll(queryParams: PostQueryDto): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: unknown;
    }>>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("mongoose").UpdateWriteOpResult>;
    deletePost(id: string, userId: string): Promise<any>;
}
