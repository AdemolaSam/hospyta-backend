import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>
  ){}
  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10)
    const user = await this.userModel.create(createUserDto)
    return user
  }

  async findAll() {
    return await this.userModel.find()
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email: email})
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne({ _id: id }, updateUserDto)
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
