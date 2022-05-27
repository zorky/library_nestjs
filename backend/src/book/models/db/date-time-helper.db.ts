import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class DateTimeHelperDb {
  @CreateDateColumn({ name: 'dt_created' })
  createdAt: string;

  @UpdateDateColumn({ name: 'dt_updated' })
  updatedAt: string;
}
