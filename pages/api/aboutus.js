// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { about_us } from "../../data";
export default function handler(req, res) {
	res.status(200).json(about_us);
}
