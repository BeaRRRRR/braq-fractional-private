import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const resp = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`);
    const json = await resp.json();
    res.json(json);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
