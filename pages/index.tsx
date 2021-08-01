import React from 'react';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import Hero from '../components/Hero';
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

const Home = ({ feed }: { feed: any[]}) => (
  <Container>
    <Hero />
  </Container>
);

export default Home;
