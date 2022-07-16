import { NextApiRequest, NextApiResponse } from "next";
import { GetAllProducts } from "../../../src/services/apiFetchService";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(await GetAllProducts());
}
