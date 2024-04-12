import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepo: Repository<TagEntity>,
  ) { }

  async findAll(): Promise<TagEntity[]> {
    return this.tagRepo.find();
  }
}
