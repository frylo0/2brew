import { dbConnect } from '@/db/connect';
import { IOrder, Order } from '@/db/models/order';

export async function POST(req: Request) {
	await dbConnect();

	try {
		const data: IOrder = await req.json();
		const res = await Order.insertMany([data]);
		return Response.json(res, { status: 200 });
	} catch (error) {
		return Response.json(error, { status: 502 });
	}
}
