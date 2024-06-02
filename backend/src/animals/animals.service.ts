import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal, AnimalDocument } from './schemas/animal.schema';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectModel(Animal.name) private animalModel: Model<AnimalDocument>,
  ) {}

  //Create method 
  async create(
    type: string,
    createAnimalDto: CreateAnimalDto,
  ): Promise<Animal> {
    const createdAnimal = new this.animalModel({ ...createAnimalDto, type });
    return createdAnimal.save();
  }

  //FindAll method by type animal
  async findAll(type: string): Promise<Animal[]> {
    return this.animalModel.find({ type }).exec();
  }

  //FindOne method by ID
  async findOne(type: string, id: string): Promise<Animal> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ObjectId');
    }
    const animal = await this.animalModel.findOne({ _id: id, type }).exec();
    if (!animal) throw new NotFoundException('Animal not found');
    return animal;
  }

  //Update method
  async update(
    type: string,
    id: string,
    updateAnimalDto: UpdateAnimalDto,
  ): Promise<Animal> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ObjectId');
    }
    const existingAnimal = await this.animalModel
      .findOneAndUpdate({ _id: id, type }, updateAnimalDto, { new: true })
      .exec();
    if (!existingAnimal) throw new NotFoundException('Animal not found');
    return existingAnimal;
  }

  //Remove method
  async remove(type: string, id: string): Promise<Animal> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ObjectId');
    }
    const animal = await this.animalModel
      .findOneAndDelete({ _id: id, type })
      .exec();
    if (!animal) throw new NotFoundException('Animal not found');
    return animal;
  }

  //Search method by name
  async search(type: string, name: string): Promise<Animal[]> {
    return this.animalModel.find({ type, name: new RegExp(name, 'i') }).exec();
  }
}
