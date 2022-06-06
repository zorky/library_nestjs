import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'library.db',
      entities: [__dirname + '/**/*.db{.ts,.js}'],
      synchronize: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
