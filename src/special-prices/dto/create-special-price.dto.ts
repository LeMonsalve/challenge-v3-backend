import { IsInt, IsUUID, Max, Min } from 'class-validator';

export class CreateSpecialPriceDto {
  @IsInt()
  @Min(1)
  @Max(1000000)
  price: number;

  @IsUUID()
  productId: string;

  @IsUUID()
  userId: string;
}
