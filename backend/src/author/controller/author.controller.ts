import {Controller, Get, Param} from '@nestjs/common';
import { AuthorService } from '../service/author.service';
import { AuthorDb } from '../../models/db/author.db';

@Controller('api/authors')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Get()
  async getAll(): Promise<AuthorDb[]> {
    return await this.authorService.getAll();
  }
  @Get(':id')
  async getById(@Param() id): Promise<AuthorDb> {
    return await this.authorService.getById(id);
  }
}
