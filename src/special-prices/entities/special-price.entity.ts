import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'preciosEspecialesMonsalve69' })
export class SpecialPrice {
  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ default: null })
  deletedAt: Date;
}

export type SpecialPriceDocument = HydratedDocument<SpecialPrice>;
export const SpecialPriceSchema = SchemaFactory.createForClass(SpecialPrice);
