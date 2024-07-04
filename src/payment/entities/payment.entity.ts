import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ nullable: true })
  currency: string;

  @Column({ default: true })
  isDeleted: boolean;
}
