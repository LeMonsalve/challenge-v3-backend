import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FakeDataService } from 'src/fake-data.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FakeDataService],
})
export class UsersModule {}
