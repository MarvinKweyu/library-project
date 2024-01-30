import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users') //  /users
export class UsersController {
  @Get() // users or users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    console.log(role);
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id') //patch /users/:id
  update(@Param('id') id: string, @Body() updatedUser: object) {
    return { id, ...updatedUser };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
