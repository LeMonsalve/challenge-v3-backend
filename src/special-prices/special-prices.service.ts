import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateSpecialPriceDto } from './dto/create-special-price.dto';
import { UpdateSpecialPriceDto } from './dto/update-special-price.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SpecialPrice } from './entities/special-price.entity';
import { Model } from 'mongoose';

@Injectable()
export class SpecialPricesService implements OnModuleInit {
  private readonly logger = new Logger(SpecialPricesService.name);

  constructor(
    @InjectModel(SpecialPrice.name) private readonly model: Model<SpecialPrice>,
  ) {}

  async onModuleInit() {
    this.logger.warn('🔥 Cleaning special prices collection...');
    await this.model.deleteMany({});
    this.logger.log('✅ Collection Cleared');
  }

  async create(createSpecialPriceDto: CreateSpecialPriceDto) {
    return this.model.create(createSpecialPriceDto);
  }

  async findAll() {
    return this.model.find().exec();
  }

  async findOne(id: string) {
    const specialPrice = await this.model.findById(id).exec();

    if (!specialPrice || specialPrice.deletedAt) {
      throw new NotFoundException(`Special price with ID ${id} not found`);
    }

    return specialPrice;
  }

  async update(id: string, updateSpecialPriceDto: UpdateSpecialPriceDto) {
    const updated = await this.model.findByIdAndUpdate(
      id,
      { ...updateSpecialPriceDto },
      {
        new: true,
      },
    );

    if (!updated) {
      throw new NotFoundException(`Special price with ID ${id} not found`);
    }
    return updated;
  }

  async softDelete(id: string) {
    const deleted = await this.model.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true },
    );

    if (!deleted) {
      throw new NotFoundException(`Special price with ID ${id} not found`);
    }

    return deleted;
  }
}
