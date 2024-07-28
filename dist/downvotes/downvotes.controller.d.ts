import { DownVotesService } from './downvote.service';
import { CreateDownvoteDto } from './dto/create-downvote.dto';
import { UpdateDownvoteDto } from './dto/update-downvote.dto';
export declare class DownvotesController {
    private readonly dislikesService;
    constructor(dislikesService: DownVotesService);
    create(createDislikeDto: CreateDownvoteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDislikeDto: UpdateDownvoteDto): string;
    remove(id: string): string;
}
