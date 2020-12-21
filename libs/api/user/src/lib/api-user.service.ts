import { Injectable } from '@nestjs/common';
import { ApiDataAccessService } from '@panng-stream-api/data-access';
import { RegisterDto } from '@panng-stream-api/security';

@Injectable()
export class ApiUserService {
  constructor(private readonly data: ApiDataAccessService) {}

  async createUser(input: RegisterDto) {
    return this.data.user.create({ data: input });
  }

  async findByUsername(username: string) {
    return this.data.user.findUnique({ where: { username } });
  }
}
