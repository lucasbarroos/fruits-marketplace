import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seed = async () => {
  const user = {
    name: 'First User',
    phone: '00000000000',
    password: '12345678',
  };

  await prisma.user.upsert({
    where: {
      name: user.name,
    },
    update: {},
    create: {
      ...user,
    },
  });
};

seed()
  .then(() => {
    console.log("Seeding the files");
  })
  .catch((err) => {
    console.log("Error seeding the files", err);
  })
  .finally(() => {
    console.log("Finishing the database connection!");
    database.$disconnect();
  });
