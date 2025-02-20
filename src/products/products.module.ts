import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { FakeDataService } from 'src/fake-data.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, FakeDataService],
})
export class ProductsModule {}
