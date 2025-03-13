import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    // repository: DB에 직접적으로 엑세스할 수 있는 레이어. 해당 entity로 정의한 테이블의 CRUD를 관리하는 역할을 함
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(user: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.userRepository.findOne({
      where: { serviceId: user.serviceId }, // Assuming unique email for user
    });

    if (existingUser) {
      throw new ConflictException(
        `User with serviceId ${user.serviceId} already exists`,
      );
    }

    const newUser = this.userRepository.create(user);
    try {
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new Error('Error while creating user');
    }
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();

    if (users.length === 0) {
      throw new NotFoundException('No users found');
    }

    return users;
  }

  async findOne(id: number): Promise<UserEntity | null> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<number> {
    const result = await this.userRepository.update(id, updateUserDto);

    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found to update`);
    }

    return id; // Return the updated user id
  }

  async remove(id: number): Promise<number> {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found to delete`);
    }

    return id; // Return the id of the deleted user id
  }
}
