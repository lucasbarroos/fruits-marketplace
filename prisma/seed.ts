import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/prefer-default-export
const runSeed = async () => {
  await prisma.user.upsert({
    where: {
      phone: '00000000000',
    },
    update: {},
    create: {
      name: 'Albert Einstein',
      phone: '00000000000',
      password: '12345678',
    },
  });
};

export default runSeed;
