import { IUser } from './User';

export interface IPost {
  title: string;
  content?: string;
  author?: IUser;
}
