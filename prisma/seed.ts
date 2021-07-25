import { PrismaClient } from '@prisma/client';

import { generatePasswordHash } from '../utils/authHelper';

const prisma = new PrismaClient();

export const runSeed = async () => {
  const user = await prisma.user.upsert({
    where: {
      phone: '00000000000',
    },
    update: {},
    create: {
      name: 'Albert Einstein',
      phone: '00000000000',
      password: await generatePasswordHash('12345678'),
    },
  });

  await prisma.post.upsert({
    where: {
      title: 'Green Apple',
    },
    update: {},
    create: {
      title: 'Green Apple',
      content: 'A very rare apple, juicy and delicious to complete your diet.',
      authorId: user.id,
    },
  });
};

runSeed().catch((err) => {
  throw err;
}).finally(() => {
  prisma.$disconnect();
});
