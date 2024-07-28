import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & Required<{
        _id: unknown;
    }>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & Required<{
        _id: unknown;
    }>>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string): Promise<string>;
}
