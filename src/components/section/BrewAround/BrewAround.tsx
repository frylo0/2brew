import cn from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

import PNG_Brewing1 from '@/assets/raster/brewing-1.png';
import PNG_Brewing2 from '@/assets/raster/brewing-2.png';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import {
	sBg,
	sBrewAround,
	sContent,
	sDescription,
	sGallery,
	sImage,
	sOptions,
	sStarmy,
	sStarmyDescr,
	sStarmyTitle,
	sTitle,
	sTopping,
} from './BrewAround.css';

export interface BrewAroundProps {
	className?: string;
}

export const BrewAround: React.FC<BrewAroundProps> = ({ className = '' }) => {
	return (
		<section className={cn(sBrewAround, className)}>
			<div className={cn(sBg)} />

			<div className={cn(sContent)}>
				<h2 className={cn(sTitle)}>Brewed all year round</h2>

				<Adaptive className={cn(sTopping)}>
					<div className={cn(sGallery)}>
						<div className={cn(sImage)}>
							<Image src={PNG_Brewing1} alt="Brewing First" layout="fill" objectFit="cover" />
						</div>

						<div className={cn(sImage)}>
							<Image src={PNG_Brewing2} alt="Brewing Second" layout="fill" objectFit="cover" />
						</div>
					</div>

					<div className={cn(sDescription)}>
						<p>
							Every chef has their favourite recipes, and with us they are the originals. These beers we brew throughout
							the year and are true fan favourites, such as Funky Falcon, Bon Chef, White Mamba and Green Bullet. We are
							constantly tasting and tweaking our originals, because you know what they say: chefs will always chef!
						</p>
						<p>
							We also brew limited editions. Small and one-off batches where we experiment with flavours, styles and
							techniques. From tomato beer to triple IPAs: if we can think of it, we can brew it.
						</p>
					</div>
				</Adaptive>

				<Adaptive className={cn(sOptions)}>
					<Starmy title="Brewery">
						Like many people, at first we wanted to open a bar. So the idea of brewery was born.
					</Starmy>

					<Starmy title="beer">
						What will impress this beer? With this question we create each variety in brewmen.
					</Starmy>

					<Starmy title="Mission">
						We strive to create the perfect beer for every taste and provide our customers with the best experience.
					</Starmy>
				</Adaptive>
			</div>
		</section>
	);
};

interface StarmyProps extends React.PropsWithChildren {
	className?: string;
	title: string;
	children: ReactNode;
}

const Starmy: React.FC<StarmyProps> = ({ className, title, children: description }) => {
	return (
		<div className={cn(sStarmy, className)}>
			<header className={cn(sStarmyTitle)}>{title}</header>
			<p className={cn(sStarmyDescr)}>{description}</p>
		</div>
	);
};
