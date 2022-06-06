import { Injectable } from '@nestjs/common';
import { BookEntity } from '../book.entity';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {BookDb} from "../../models/db/book.db";

@Injectable()
export class BookService {
  constructor(
      @InjectRepository(BookDb)
      private booksRepository: Repository<BookDb>,
  ) {}
  async getAll(): Promise<BookDb[]> {
    return this.booksRepository.find();
  }
  async getById(id): Promise<BookDb> {
    return this.booksRepository.findOne(id);
  }
}
