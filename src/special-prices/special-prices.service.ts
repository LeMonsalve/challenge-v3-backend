import { Injectable } from '@nestjs/common';
import { CreateSpecialPriceDto } from './dto/create-special-price.dto';
import { UpdateSpecialPriceDto } from './dto/update-special-price.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SpecialPrice } from './entities/special-price.entity';
import { Model } from 'mongoose';

@Injectable()
export class SpecialPricesService {
  constructor(
    @InjectModel(SpecialPrice.name) private readonly model: Model<SpecialPrice>,
  ) {}

  create(createSpecialPriceDto: CreateSpecialPriceDto) {
    return 'This action adds a new specialPrice';
  }

  findAll() {
    return `This action returns all specialPrices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} specialPrice`;
  }

  update(id: number, updateSpecialPriceDto: UpdateSpecialPriceDto) {
    return `This action updates a #${id} specialPrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialPrice`;
  }
}
