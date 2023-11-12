// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// pages/api/gallery.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import data from "../../data/gallery.json";
import { type } from 'os';



type Data = {
    src: string;
    date: string;
    heading: string;
    author: string;
};


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data);
}
