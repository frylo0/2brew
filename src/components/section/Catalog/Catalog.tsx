'use client';

import cn from 'clsx';

import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { useBeers$ } from '@/stores/beers.store';
import { sCatalog, sGrid, sTitle } from './Catalog.css';
import { Product } from './Product/Product';

export interface CatalogProps {
	className?: string;
}

export const Catalog: React.FC<CatalogProps> = ({ className = '' }) => {
	const { beers } = useBeers$();

	return (
		<Adaptive className={cn(sCatalog, className)}>
			<h2 className={cn(sTitle)}>Catalog</h2>

			<ul className={cn(sGrid)}>
				{beers.map((item, i) => (
					<Product {...item} key={i} />
				))}
			</ul>
		</Adaptive>
	);
};
