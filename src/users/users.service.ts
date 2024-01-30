import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getCurrentUser() {
    return 'Marvin';
  }
}
