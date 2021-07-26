import { IUser } from './User';

export interface IPost {
  id?: number;
  title: string;
  content?: string;
  author?: IUser;
}
