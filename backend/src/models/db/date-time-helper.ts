import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class DateTimeHelper {
  @CreateDateColumn({ name: 'dt_created' })
  createdAt: string;

  @UpdateDateColumn({ name: 'dt_updated' })
  updatedAt: string;
}
