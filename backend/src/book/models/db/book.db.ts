import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AuthorDb } from './author.db';
import {DateTimeHelperDb} from "./date-time-helper.db";

@Entity({ name: 'book' })
export class BookDb extends DateTimeHelperDb {
  @PrimaryGeneratedColumn()
  public id: number;
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
