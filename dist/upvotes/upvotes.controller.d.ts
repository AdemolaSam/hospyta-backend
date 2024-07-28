import { UpvotesService } from './upvotes.service';
import { CreateUpvoteDto } from './dto/create-upvote.dto';
import { UpdateUpvoteDto } from './dto/update-upvote.dto';
export declare class UpvotesController {
    private readonly likesService;
    constructor(likesService: UpvotesService);
    create(createLikeDto: CreateUpvoteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLikeDto: UpdateUpvoteDto): string;
    remove(id: string): string;
}
