import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') //  /users
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get() // users or users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    console.log(role);

    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // convert to a number
    return this.userService.findOne(+id);
  }

  @Post()
  create(
    @Body()
    user: CreateUserDto,
  ) {
    return this.userService.create(user);
  }

  @Patch(':id') //patch /users/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedUser: UpdateUserDto,
  ) {
    return this.userService.update(id, updatedUser);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
