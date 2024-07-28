import { CreateUpvoteDto } from './dto/create-upvote.dto';
import { UpdateUpvoteDto } from './dto/update-upvote.dto';
export declare class UpvotesService {
    create(createLikeDto: CreateUpvoteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLikeDto: UpdateUpvoteDto): string;
    remove(id: number): string;
}
