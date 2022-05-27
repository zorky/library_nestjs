import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BookDb } from './book.db';
import {DateTimeHelperDb} from "./date-time-helper.db";

@Entity({ name: 'author' })
export class AuthorDb extends DateTimeHelperDb {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column({ nullable: false, name: 'first_name' })
  public firstName: string;
  @Column({ nullable: false, name: 'last_name' })
  public lastName: string;
  @OneToMany(() => BookDb, (book: BookDb) => book.author)
  books: BookDb[];
}
