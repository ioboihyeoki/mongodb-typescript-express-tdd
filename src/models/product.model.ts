import { getModelForClass, prop } from '@typegoose/typegoose';

export class ProductClass {
  @prop({ required: true })
  public name!: string;
  @prop({ required: true })
  public description!: string;
  @prop({ default: 0 })
  public price!: number;
}
export const ProductModel = getModelForClass(ProductClass);
