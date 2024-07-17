'use client';

import cn from 'clsx';
import { useEffect } from 'react';

import { useBeers$ } from '@/stores/beers.store';
import { sCatalog } from './Catalog.css';

export interface CatalogProps {
	className?: string;
}

export const Catalog: React.FC<CatalogProps> = ({ className = '' }) => {
	const { beers, ready: beersReady } = useBeers$();

	useEffect(() => {
		if (beersReady) {
			console.log('Beers ready:', beers);
		} else {
			console.log('Beers loading...');
		}
	}, [beers, beersReady]);

	return <div className={cn(sCatalog, className)}></div>;
};
