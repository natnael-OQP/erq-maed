// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { service_data } from "../../data";
export default function handler(req, res) {
	res.status(200).json(service_data);
}
