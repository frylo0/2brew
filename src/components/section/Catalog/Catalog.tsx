'use client';

import cn from 'clsx';
import { useState } from 'react';

import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { IBeer } from '@/db/models/beer';
import { useBeers$ } from '@/stores/beers.store';
import { sCatalog, sGrid, sTitle } from './Catalog.css';
import { Product } from './Product/Product';
import { ProductModal } from './ProductModal/ProductModal';

export interface CatalogProps {
	className?: string;
}

export const Catalog: React.FC<CatalogProps> = ({ className = '' }) => {
	const { beers } = useBeers$();

	const [modalProduct, setModalProduct] = useState<IBeer | null>(null);
	const [modalOpened, setModalOpened] = useState(false);

	const handleProductClick = (item: IBeer) => {
		setModalProduct(item);
		setModalOpened(true);
	};
	const handleModalClose = () => setModalOpened(false);

	return (
		<Adaptive as="section" id="catalog" className={cn(sCatalog, className)}>
			<h2 className={cn(sTitle)}>Catalog</h2>

			<ul className={cn(sGrid)}>
				{beers.map((item, i) => (
					<Product {...item} key={i} onClick={handleProductClick} />
				))}
			</ul>

			<ProductModal opened={modalOpened} onClose={handleModalClose} product={modalProduct} />
		</Adaptive>
	);
};
