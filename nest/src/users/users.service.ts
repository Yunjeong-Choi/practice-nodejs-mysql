import { Injectable, NotFoundException } from '@nestjs/common';
// TODO: typeOrm을 사용하면 create, update dto를 각각 만들어주지 않아도 되는걸까?
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    // TODO: repository란?
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<UserEntity | null> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<number> {
    // TODO: 성공/실패 분기?
    const result = await this.userRepository.update(id, updateUserDto);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.userRepository.delete(id);
    return id;
  }
}
