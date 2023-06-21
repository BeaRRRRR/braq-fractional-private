import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from "../auth/[...nextauth]"
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if(req.method === 'POST') {
    if (session) {
      const user = await prisma.user.create({
        data: {
          address: session?.user?.address,
          name: req.body.name,
          email: req.body.email,
          dob: new Date(req.body.dob),
          twitter: req.body.twitter,
          discord: req.body.discord,
          country: req.body.country,
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
