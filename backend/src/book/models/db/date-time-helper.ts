import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class DateTimeHelper {
  @CreateDateColumn({ name: 'dt_created' })
  createdAt: string;

  @UpdateDateColumn({ name: 'dt_updated' })
  updatedAt: string;
}
