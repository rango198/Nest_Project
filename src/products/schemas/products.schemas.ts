import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  price: number

}
export const ProductSchema = SchemaFactory.createForClass(Product)