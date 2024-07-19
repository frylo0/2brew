'use client';

import { memo, useEffect } from 'react';
import { create } from 'zustand';

import { API_URL } from '@/constants/env';
import { IBeer } from '@/db/models/beer';
import { IOrder } from '@/db/models/order';

type State = {
	ready: boolean;
	beers: IBeer[];
};

type Actions = {
	init: () => Promise<void>;
	sendOrder: (formData: FormData, product?: IBeer, option?: string) => Promise<boolean>;
};

export const useBeers$ = create<State & Actions>((set) => ({
	ready: false,
	beers: [],

	async init() {
		const beers = await fetch(`${API_URL}/beers/`).then((res) => res.json());
		set({ beers });
		set({ ready: true });
	},

	async sendOrder(formData, product, option) {
		const data: IOrder = {
			name: formData.get('name') as string,
			phone: formData.get('phone') as string,
			email: formData.get('email') as string,
			product,
			option,
		};

		const res = await fetch(`${API_URL}/order/`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json',
			},
		});

		return res.ok;
	},
}));

const Init: React.FC = () => {
	const { init } = useBeers$();

	useEffect(() => {
		init();
	}, [init]);

	return <></>;
};

export const InitBeers$ = memo(Init);
