import { Injectable } from '@nestjs/common';
import { BookEntity } from '../book.entity';

@Injectable()
export class BookService {
  books: BookEntity[] = [
    <BookEntity>{ id: 1, title: 'NestJS 101' },
    <BookEntity>{ id: 2, title: 'Angular' },
  ];
  async getAll(): Promise<BookEntity[]> {
    return this.books;
  }
  async getById(id): Promise<BookEntity> {
    return this.books.find((_book: BookEntity) => _book.id === Number(id.id));
  }
}
