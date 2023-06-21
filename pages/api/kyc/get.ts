import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from "../auth/[...nextauth]"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if(req.method === 'GET') {
    if (session) {
      const user = await prisma.user.findUnique({
        where: {
          address: session?.user?.address
        }
      })
      res.json(user);
    } else {
      res.status(401).send({ message: 'Unauthorized' })
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
