import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Post, { PostProps } from '../components/Post';
import prisma from '../lib/prisma';
import {
  Container,
} from './styles';

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { props: { feed } };
};

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = ({ feed }: { feed: any[]}) => (
  <Layout>
    <Container className="page">
      <h1>Public Feed</h1>
      <main>
        {feed && feed.map((post) => (
          <div key={post.id} className="post">
            <Post post={post} />
          </div>
        ))}
      </main>
    </Container>
  </Layout>
);

export default Blog;
