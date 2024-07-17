import mongoose, { Model, Schema, SchemaTypes } from 'mongoose';

export interface IBeer {
	name: string;
	category: string;
	price: number;
	image: string;
}

const beerSchema: Schema<IBeer> = new Schema({
	name: {
		type: SchemaTypes.String,
		required: true,
	},
	category: {
		type: SchemaTypes.String,
		required: true,
	},
	image: {
		type: SchemaTypes.String,
		required: true,
	},
	price: {
		type: SchemaTypes.Number,
		required: true,
	},
});

export const Beer: Model<IBeer> = mongoose.models.Beer || mongoose.model<IBeer>('Beer', beerSchema, 'beers');
