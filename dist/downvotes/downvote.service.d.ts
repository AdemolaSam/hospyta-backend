import { CreateDownvoteDto } from './dto/create-downvote.dto';
import { UpdateDownvoteDto } from './dto/update-downvote.dto';
export declare class DownVotesService {
    create(createDislikeDto: CreateDownvoteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDislikeDto: UpdateDownvoteDto): string;
    remove(id: number): string;
}
