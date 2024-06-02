import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('animals')
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  // Create a new animal
  @Post(':type')
  async create(
    @Param('type') type: string,
    @Body() createAnimalDto: CreateAnimalDto,
  ) {
    try {
      return await this.animalsService.create(type, createAnimalDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Get all animals of a specific type
  @Get(':type')
  async findAll(@Param('type') type: string) {
    try {
      return await this.animalsService.findAll(type);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Search for animals of a specific type by name
  @Get(':type/search')
  async search(@Param('type') type: string, @Query('name') name: string) {
    try {
      return await this.animalsService.search(type, name);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Get details of a specific animal by ID
  @Get(':type/details/:id')
  async findOne(@Param('type') type: string, @Param('id') id: string) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid ID format');
    }
    try {
      return await this.animalsService.findOne(type, id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Update an animal by ID
  @Put(':type/:id')
  async update(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid ID format');
    }
    try {
      return await this.animalsService.update(type, id, updateAnimalDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Delete an animal by ID
  @Delete(':type/:id')
  async remove(@Param('type') type: string, @Param('id') id: string) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid ID format');
    }
    try {
      return await this.animalsService.remove(type, id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
