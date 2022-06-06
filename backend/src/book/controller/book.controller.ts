import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from '../service/book.service';
import { BookDb } from '../../models/db/book.db';

@Controller('api/books')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get()
  async getAll(): Promise<BookDb[]> {
    return await this.bookService.getAll();
  }
  @Get(':id')
  async getById(@Param() id): Promise<BookDb> {
    return await this.bookService.getById(id);
  }
}
