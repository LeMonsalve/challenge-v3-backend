import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SpecialPricesService } from './special-prices.service';
import { CreateSpecialPriceDto } from './dto/create-special-price.dto';
import { UpdateSpecialPriceDto } from './dto/update-special-price.dto';

@Controller('special-prices')
export class SpecialPricesController {
  constructor(private readonly specialPricesService: SpecialPricesService) {}

  @Post()
  create(@Body() createSpecialPriceDto: CreateSpecialPriceDto) {
    return this.specialPricesService.create(createSpecialPriceDto);
  }

  @Get()
  findAll() {
    return this.specialPricesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialPricesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpecialPriceDto: UpdateSpecialPriceDto,
  ) {
    return this.specialPricesService.update(id, updateSpecialPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialPricesService.softDelete(id);
  }
}
