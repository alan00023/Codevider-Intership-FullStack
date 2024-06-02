import {
  IsString,
  IsOptional,
  IsArray,
  IsUrl,
  IsNumber,
} from 'class-validator';

//animal Data Transfer Object + validation to ensure the data being correct 
export class CreateAnimalDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  origin?: string;

  @IsString()
  @IsOptional()
  temperament?: string;

  @IsArray()
  @IsOptional()
  colors?: string[];

  @IsString()
  description: string;

  @IsUrl()
  image: string;

  // Dog-specific properties
  @IsString()
  @IsOptional()
  breed_group?: string;

  @IsString()
  @IsOptional()
  size?: string;

  @IsString()
  @IsOptional()
  lifespan?: string;

  // Bird-specific properties
  @IsString()
  @IsOptional()
  species?: string;

  @IsString()
  @IsOptional()
  family?: string;

  @IsString()
  @IsOptional()
  habitat?: string;

  @IsString()
  @IsOptional()
  place_of_found?: string;

  @IsString()
  @IsOptional()
  diet?: string;

  @IsNumber()
  @IsOptional()
  weight_kg?: number;

  @IsNumber()
  @IsOptional()
  height_cm?: number;

  @IsString()
  type: string;
}
