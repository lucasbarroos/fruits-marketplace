import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/prefer-default-export
export const seed = async () => {
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

seed()
  .catch((err) => {
    console.log('Error seeding', err);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Finishing the database connection!');
    await prisma.$disconnect();
  });
