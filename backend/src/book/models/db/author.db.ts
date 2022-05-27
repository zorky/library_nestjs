import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BookDb } from './book.db';
import { DateTimeHelper } from './date-time-helper';

@Entity({ name: 'author' })
export class AuthorDb extends DateTimeHelper {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column({ nullable: false, name: 'first_name' })
  public firstName: string;
  @Column({ nullable: false, name: 'last_name' })
  public lastName: string;
  @OneToMany(() => BookDb, (book: BookDb) => book.author)
  books: BookDb[];
}
