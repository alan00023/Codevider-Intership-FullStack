import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnimalDocument = Animal & Document;

@Schema()
export class Animal {
  @Prop({ required: true })
  name: string;

  @Prop()
  origin?: string;

  @Prop()
  temperament?: string;

  @Prop([String])
  colors?: string[];

  @Prop()
  description: string;

  @Prop()
  image: string;

  // Dog-specific properties
  @Prop()
  breed_group?: string;

  @Prop()
  size?: string;

  @Prop()
  lifespan?: string;

  // Bird-specific properties
  @Prop()
  species?: string;

  @Prop()
  family?: string;

  @Prop()
  habitat?: string;

  @Prop()
  place_of_found?: string;

  @Prop()
  diet?: string;

  @Prop()
  weight_kg?: number;

  @Prop()
  height_cm?: number;

  @Prop({ required: true })
  type: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
