import { Inject, Injectable } from '@nestjs/common';
import { FakeDataService } from 'src/fake-data.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(FakeDataService)
    private readonly fakeDataService: FakeDataService,
  ) {}

  findAll() {
    return this.fakeDataService.getUsers();
  }
}
