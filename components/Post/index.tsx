import React from 'react';
import Router from 'next/router';
import { IPost } from '../../utils/interfaces/Post';
import {
  Container,
} from './styles';

const Post = ({
  id, title, content, author,
}: IPost) => (
  <Container onClick={() => Router.push('/post/[id]', `/post/${id}`)}>
    <h2>{title}</h2>
    <span>{content}</span>
    <small>
      By
      {' '}
      {author?.name}
    </small>
  </Container>
);

export default Post;
