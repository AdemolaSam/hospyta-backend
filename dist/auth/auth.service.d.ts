import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UsersService);
    signIn(authDto: CreateAuthDto): Promise<{
        token: string;
        user: {
            id: any;
            username: string;
        };
    }>;
    findAll(): Promise<string>;
    findOne(id: number): Promise<string>;
}
