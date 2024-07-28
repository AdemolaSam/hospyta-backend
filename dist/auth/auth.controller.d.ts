import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(createAuthDto: CreateAuthDto): Promise<{
        token: string;
        user: {
            id: any;
            username: string;
        };
    }>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    update(id: string, updateAuthDto: UpdateAuthDto): void;
}
