import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Charlie',
      email: 'charlie@example.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'David',
      email: 'david@example.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Eve',
      email: 'eve@example.com',
      role: 'ENGINEER',
    },
  ];

  getCurrentUser() {
    return 'Marvin';
  }

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): User[] {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }): User {
    // find the largest id
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: usersByHighestId[0].id + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
