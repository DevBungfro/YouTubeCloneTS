lsimport { Collection, SubCollecti, ISubCollectionon } from 'fireorm';
import { Channel } from './Channel'

@Collection()
export class Todo {
  id: string;
  username: string;
  email: string;
  
  @SubCollection(Channel)
  channs?: ISubCollection<Channel>
}