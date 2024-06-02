import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animal.dto';

// UpdateAnimalDto extends the CreateAnimalDto and makes all the properties optional
export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {}
