import React from 'react';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import prisma from '../../lib/prisma';
import { IPost } from '../../utils/interfaces/Post';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};

const Post = ({ title, author, content }: IPost) => (
  <div>
    <div>
      <h2>{title}</h2>
      <p>
        By
        {' '}
        {author?.name || 'Unknown author'}
      </p>
      <ReactMarkdown source={content} />
    </div>
    <style jsx>
      {`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}

    </style>
  </div>
);

export default Post;
