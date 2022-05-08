import { Controller, Get } from '@nestjs/common';
import { BookService } from '../service/book.service';
import { BookEntity } from '../book.entity';

@Controller('api/books')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get()
  async GetAll(): Promise<BookEntity[]> {
    return await this.bookService.getAll();
  }
}
