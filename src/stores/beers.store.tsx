'use client';

import { memo, useEffect } from 'react';
import { create } from 'zustand';

import { API_URL } from '@/constants/env';
import { IBeer } from '@/db/models/beer';

type State = {
	ready: boolean;
	beers: IBeer[];
};

type Actions = {
	init: () => Promise<void>;
};

export const useBeers$ = create<State & Actions>((set) => ({
	ready: false,
	beers: [],

	init: async () => {
		const beers = await fetch(`${API_URL}/beers/`).then((res) => res.json());
		set({ beers });
		set({ ready: true });
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
