import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("accounts")
export class Account {
  @PrimaryGeneratedColumn()
  uid: string;
}