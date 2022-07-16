import { NextApiResponse } from "next";
import { GetProductById } from "../../../src/services/apiFetchService";

export default async function handler(req: any, res: NextApiResponse) {
  res.status(200).json(await GetProductById(req.query.id));
}
