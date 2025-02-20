import { Injectable } from '@nestjs/common';
import { Product } from './products/entities/product.entity';
import { User } from './users/entities/user.entity';
import { faker } from '@faker-js/faker';
import { envs } from './config/env.config';

@Injectable()
export class FakeDataService {
  private readonly products: Product[] = this.generateProducts(
    envs.initialProductsCount,
  );

  private readonly users: User[] = this.generateUsers(envs.initialUsersCount);

  private generateProducts(count: number): Product[] {
    return Array.from({ length: count }).map(() => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
      description: faker.commerce.productDescription(),
      imageUrl: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
      countInStock: faker.number.int({ min: 0, max: 100 }),
    }));
  }

  private generateUsers(count: number): User[] {
    return Array.from({ length: count }).map(() => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    }));
  }

  getProducts() {
    return this.products;
  }

  getUsers() {
    return this.users;
  }
}
