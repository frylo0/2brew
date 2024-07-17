import cn from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link, { LinkProps } from 'next/link';

import PNG_2Brew from '@/assets/raster/store-2brew.png';
import PNG_BoonsMarkt from '@/assets/raster/store-boons-markt.png';
import PNG_DN from '@/assets/raster/store-dn.png';
import PNG_Jumbo from '@/assets/raster/store-jumbo.png';
import PNG_Pllek from '@/assets/raster/store-pllek.png';
import PNG_Sparo from '@/assets/raster/store-sparo.png';
import PNG_TheJungle from '@/assets/raster/store-the-jungle.png';
import PNG_UltimateParty from '@/assets/raster/store-ultimate-party.png';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { layoutFill } from '@/lib/nextjs-legacy';
import { sGrid, sStore, sStoreFigure, sTitle, sWhereBuy } from './WhereBuy.css';

export interface WhereBuyProps {
	className?: string;
}

export const WhereBuy: React.FC<WhereBuyProps> = ({ className = '' }) => {
	return (
		<Adaptive as="section" className={cn(sWhereBuy, className)}>
			<h2 className={cn(sTitle)}>Where to buy</h2>

			<div className={cn(sGrid)}>
				<Store name="Two Chefs Brewing" href="#!" image={PNG_2Brew} />
				<Store name="The Jungle" href="#!" image={PNG_TheJungle} />
				<Store name="Ultimate Party" href="#!" image={PNG_UltimateParty} />
				<Store name="Pllek" href="#!" image={PNG_Pllek} />

				<Store name="Jumbo" href="#!" image={PNG_Jumbo} />
				<Store name="Boon's Markt" href="#!" image={PNG_BoonsMarkt} />
				<Store name="Sparo" href="#!" image={PNG_Sparo} />
				<Store name="DN" href="#!" image={PNG_DN} />
			</div>
		</Adaptive>
	);
};

interface StoreProps extends React.PropsWithChildren {
	className?: string;
	href: LinkProps['href'];
	image: StaticImageData;
	name: string;
}

const Store: React.FC<StoreProps> = ({ className, href, name, image }) => {
	return (
		<Link className={cn(sStore)} href={href} target="_blank" title={name}>
			<figure className={cn(sStoreFigure, className)}>
				<Image src={image} alt={name} style={{ ...layoutFill, objectFit: 'contain', objectPosition: 'center' }} />
			</figure>
		</Link>
	);
};
