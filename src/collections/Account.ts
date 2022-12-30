import { Collection } from 'fireorm';
import { IsEmail } from 'class-validator';

@Collection()
export class Todo {
  id: string;
  username: string;
  
  @IsEmail()
  email: string;
}