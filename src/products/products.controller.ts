import { Controller, Get, Inject } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(ProductsService)
    private readonly productsService: ProductsService,
  ) {}

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }
}
