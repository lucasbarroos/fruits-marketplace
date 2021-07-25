import { IPost } from './Post';

export interface IUser {
  id?: number;
  name: string;
  phone?: string;
  posts?: IPost[];
}
