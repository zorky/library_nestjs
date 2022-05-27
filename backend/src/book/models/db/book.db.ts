import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AuthorDb } from './author.db';
import { DateTimeHelper } from './date-time-helper';

@Entity({ name: 'book' })
export class BookDb extends DateTimeHelper {
  @PrimaryGeneratedColumn('uuid')
  public uuid!: string;
  @Column({ nullable: false })
  @Index()
  public title: string;
  @Column({ nullable: true })
  public summary: string;
  @Column({ nullable: true })
  public ISBN: string;
  @ManyToOne(() => AuthorDb, (author: AuthorDb) => author.books)
  @JoinColumn({ name: 'author_id' })
  public author: AuthorDb;
}
