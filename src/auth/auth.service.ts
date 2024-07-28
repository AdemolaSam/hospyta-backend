import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService
  )
  {}
  async signIn(authDto: CreateAuthDto) {
    const foundUser = await this.userService.findByEmail(authDto.email)
    if(!foundUser){
      throw new NotFoundException()
    }
    const isValidCred = await bcrypt.compareSync(authDto.password, foundUser.password)
    if(isValidCred === false){
      throw new Error('Invalid Credentials')
    }
    const payload = { userId: foundUser.id, email: foundUser.email }
    const token = await this.jwtService.signAsync(payload)
    return {
      token: token,
      user: {
          id: foundUser.id,
          username: foundUser.username,
      }
  }
  }

  async findAll() {
    return ;
  }

  async findOne(id: number) {
    return `This action returns a #${id} auth`;
  }
}
