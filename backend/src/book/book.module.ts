import { Module } from '@nestjs/common';
import { BookController } from './controller/book.controller';
import { BookService } from './service/book.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BookDb} from "../models/db/book.db";

@Module({
  imports: [TypeOrmModule.forFeature([BookDb])],
  exports: [TypeOrmModule],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
