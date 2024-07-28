import { Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './entities/post.entity';
import { Model } from 'mongoose';
import { PostQueryDto } from './dto/post-query.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private postModel: Model<Post>
  ){}
  async create(createPostDto: CreatePostDto) {
    const post = await this.postModel.create(createPostDto)
    return post
  }

  async findAll(queryParams?: PostQueryDto):Promise<Post[]> {
    const { page = 1, limit = 10, author, category, mostUpvoted } = queryParams;
    const filters: any = {};

    if (author) {
      filters.author = author;
    }

    if (category) {
      filters.category = category;
    }

    let postsQuery = this.postModel.find(filters);

    if (mostUpvoted) {
      postsQuery = postsQuery.sort({ likesCount: -1 });
    }

    postsQuery = postsQuery.skip((page - 1) * limit).limit(limit);

    return postsQuery.exec();
  }

  async findOne(id: string) {
    return await this.postModel.findById(id);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.postModel.updateOne(updatePostDto)
  }

  
  async deletePost(id: string, userId: string): Promise<any> {
    const post = await this.postModel.findById(id)
    if(post.author.id !== userId){
       throw new UnauthorizedException()
    }
    return await this.postModel.deleteOne({_id: id});
  }
}
