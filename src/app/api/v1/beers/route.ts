import { dbConnect } from '@/db/connect';
import { Beer } from '@/db/models/beer';

export const dynamic = 'force-dynamic';

export async function GET() {
	await dbConnect();

	try {
		const res = await Beer.find({});
		return Response.json(res, { status: 200 });
	} catch (error) {
		return Response.json(error, { status: 502 });
	}
}
