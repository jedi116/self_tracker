import { prisma } from '@/prisma';
import { PassPhrase } from '@/types/PassPhrase';

export const getLatestPassPhrase = async () => {
  const passphrase: PassPhrase | null = await prisma.passPhrase.findFirst({
    where: {
      active: true,
    },
    orderBy: {
      timestamp: 'desc', // Sort by timestamp in descending order to get the latest one
    },
  });
  return passphrase?.value;
};
