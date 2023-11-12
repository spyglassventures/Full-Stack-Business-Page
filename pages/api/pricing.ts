// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// pages/api/pricing.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import data from "../../data/pricing.json";
import { type } from 'os';



type Data = {
    plan: string;
    description: string;
    monthlyPrice: string;
    yearlyPrice: string;
};


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data);
}
