import { PrismaClient } from '@prisma/client';

import { generatePasswordHash } from '../utils/authHelper';

const prisma = new PrismaClient();

export const runSeed = async () => {
  await prisma.user.upsert({
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
};

runSeed().catch((err) => {
  throw err;
}).finally(() => {
  prisma.$disconnect();
});
