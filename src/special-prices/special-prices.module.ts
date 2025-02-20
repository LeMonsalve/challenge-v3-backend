import { Module } from '@nestjs/common';
import { SpecialPricesService } from './special-prices.service';
import { SpecialPricesController } from './special-prices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SpecialPrice,
  SpecialPriceSchema,
} from './entities/special-price.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SpecialPrice.name, schema: SpecialPriceSchema },
    ]),
  ],
  controllers: [SpecialPricesController],
  providers: [SpecialPricesService],
})
export class SpecialPricesModule {}
