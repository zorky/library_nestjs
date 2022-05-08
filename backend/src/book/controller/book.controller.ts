import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from '../service/book.service';
import { BookEntity } from '../book.entity';

@Controller('api/books')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get()
  async getAll(): Promise<BookEntity[]> {
    return await this.bookService.getAll();
  }
  @Get(':id')
  async getById(@Param() id): Promise<BookEntity> {
    return await this.bookService.getById(id);
  }
}
