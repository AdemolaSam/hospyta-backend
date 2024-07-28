import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }>>;
    findByEmail(email: string): Promise<User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: number): Promise<string>;
}
