// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Radio } from '../../data';
export default function handler(req, res) {
  res.status(200).json(Radio)
}
