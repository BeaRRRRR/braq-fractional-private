import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const user = await prisma.user.create({
      data: {
        address: req.body.address,
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
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
