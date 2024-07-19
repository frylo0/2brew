import mongoose, { Model, Schema, SchemaTypes } from 'mongoose';

import { beerSchema, IBeer } from './beer';

export interface IOrder {
	name: string;
	phone?: string;
	email: string;
	product?: IBeer;
	option?: string;
}

const orderSchema = new Schema<IOrder>({
	name: {
		type: SchemaTypes.String,
		required: true,
	},
	phone: {
		type: SchemaTypes.String,
		required: false,
	},
	email: {
		type: SchemaTypes.String,
		required: true,
	},
	product: {
		type: beerSchema,
		required: false,
	},
	option: {
		type: SchemaTypes.String,
		required: false,
	},
});

export const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', orderSchema, 'orders');
