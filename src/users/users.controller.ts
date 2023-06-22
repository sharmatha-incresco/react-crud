import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

export class User {
  id: number;
  name: string;
}

export class CreateUserDto {
  name: string;
}

export class UpdateUserDto {
  name: string;
}

@ApiTags('users')
@Controller('users')
export class UsersController {
  private users = [
    { id: 1, name: 'sharmatha' },
    { id: 2, name: 'sindhu' },
    { id: 3, name: 'kaviya' },
    { id: 4, name: 'divya' }
  ];

  @Get()
  @ApiResponse({ status: 200, description: 'List of users', type: User, isArray: true })
  findAll() {
    return this.users;
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The user', type: User })
  findOne(@Param('id') id: number) {
    const user = this.users.find((u) => u.id === Number(id));
    if (!user) {
      return null;
    }
    return user;
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The created user', type: User })
  create(@Body() createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      name:createUserDto.name,
    };
    this.users.push(newUser);
    return newUser;
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'The updated user', type: User })
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    const user = this.users.find((u) => u.id === Number(id));
    if (!user) {
      return null;
    }
    user.name = updateUserDto.name;
    return user;
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'The deleted user', type: User })
  remove(@Param('id') id: number) {
    const index = this.users.findIndex((u) => u.id === Number(id));
    if (index === -1) {
      return null;
    }
    const deletedUser = this.users[index];
    this.users.splice(index, 1);
    return deletedUser;
  }
}
