import { Collection, SubCollection, ISubCollection } from 'fireorm';
import { Channel } from './Channel'

@Collection()
export class Account {
  id: string;
  username: string;
  email: string;
  
  @SubCollection(Channel)
  channels?: ISubCollection<Channel>;
}