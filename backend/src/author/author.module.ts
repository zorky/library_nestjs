import { Module } from '@nestjs/common';
import { AuthorController } from './controller/author.controller';
import { AuthorService } from './service/author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorDb } from '../models/db/author.db';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorDb])],
  exports: [TypeOrmModule],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
