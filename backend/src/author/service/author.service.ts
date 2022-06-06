import { Injectable } from '@nestjs/common';
import { AuthorDb } from '../../models/db/author.db';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorDb)
    private authorsRepository: Repository<AuthorDb>,
  ) {}
  async getAll(): Promise<AuthorDb[]> {
    const _authors = this.authorsRepository.find();
    _authors.then((_results) => console.log(_results));
    return _authors;
  }
  async getById(id): Promise<AuthorDb> {
    return this.authorsRepository.findOne(id);
  }
}
