import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { envs } from './config/env.config';
import { ProductsModule } from './products/products.module';
import { SpecialPricesModule } from './special-prices/special-prices.module';
import { FakeDataService } from './fake-data.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${envs.mongoUrl}/tienda`),
    ProductsModule,
    SpecialPricesModule,
    UsersModule,
  ],
  providers: [FakeDataService],
  exports: [FakeDataService],
})
export class AppModule {}
