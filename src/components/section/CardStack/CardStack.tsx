'use client';

import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import PNG_BockBrulle from '@/assets/raster/beer/bock-brulle.png';
import SVG_Untappd from '@/assets/vector/untappd.svg';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { Button } from '@/components/common/Button/Button';
import {
	sBg,
	sBtnOrder,
	sBtnShop,
	sCardStack,
	sCategory,
	sContent,
	sDescription,
	sFeat,
	sFeatName,
	sFeatures,
	sFeatValue,
	sFooter,
	sImage,
	sOption,
	sOptions,
	sOptionSelected,
	sPresentation,
	sPrice,
	sSlogan,
	sSubtitle,
	sTitle,
} from './CardStack.css';

export interface CardStackProps {
	className?: string;
}

export const CardStack: React.FC<CardStackProps> = ({ className = '' }) => {
	const category: string = 'Pastry bock';

	const title: string = 'Bòck Brûlée';
	const subtitle: string = 'caramel & Vanilla';

	const description: string =
		'Summer has come and gone, but hey, our sturdy Bock is back!' +
		" Whether you're lounging indoors or exploring the woods, the Bòck Brûlée is right there with you." +
		" We've combined roasted malts, caramel flavors, a hint of vanilla," +
		" and a touch of sweetness to create a dessert in a glass that's simply irresistible." +
		" No need for a fancy roaster, but it's even better by a crackling fire.";

	const options: Record<string, { price: number }> = {
		'1 stuk': { price: 2.3 },
		'3 + 1 stuks': { price: 6.9 },
		'6 + 2 stuks': { price: 13.8 },
		'12 + 4 stuks': { price: 27.6 },
	};
	const optionsList = Object.entries(options);

	const imageSrc: string = PNG_BockBrulle.src;
	const slogan: string = 'Pumpkin spice? Forget about it! the third edition of our autumn buddy is all you need';

	const features: Record<string, string> = {
		Alcohol: '7%',
		Destiny: '16%',
		Units: '20',
	};

	const productUrl: string = '#!';

	const [optionI, setOptionI] = useState(0);
	const [, optionMetaData] = optionsList[optionI];

	const priceInt = Math.trunc(optionMetaData.price);
	const priceFract = parseInt(
		optionMetaData.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).split('.')[1]
	);

	const handleOrderClick = () => {
		console.log('Order clicked');
	};

	const handleOptionClick = (i: number) => () => {
		setOptionI(i);
	};

	return (
		<Adaptive as="section" className={cn(sCardStack, className)}>
			<div className={cn(sBg)}>
				<div className={cn(sContent)}>
					<div className={cn(sCategory)}>{category}</div>

					<h3 className={cn(sTitle)}>{title}</h3>
					<h4 className={cn(sSubtitle)}>{subtitle}</h4>

					<p className={cn(sDescription)}>{description}</p>

					<ul className={cn(sOptions)}>
						{optionsList.map(([title], i) => (
							<li className={cn(sOption, i === optionI && sOptionSelected)} key={i}>
								<Button noArrow onClick={handleOptionClick(i)}>
									{title}
								</Button>
							</li>
						))}
					</ul>

					<footer className={cn(sFooter)}>
						<span className={cn(sPrice)}>
							{priceInt}
							<sup>{priceFract}</sup>€
						</span>

						<Button className={cn(sBtnOrder)} onClick={handleOrderClick}>
							Order
						</Button>
					</footer>
				</div>

				<div className={cn(sPresentation)}>
					<figure className={cn(sImage)}>
						<Image src={imageSrc} layout="fill" alt={title} />
					</figure>

					<div className={cn(sSlogan)}>{slogan}</div>

					<ul className={cn(sFeatures)}>
						{Object.entries(features).map(([name, value], i) => (
							<li className={cn(sFeat)} key={i}>
								<span className={cn(sFeatValue)}>{value}</span>
								<span className={cn(sFeatName)}>{name}</span>
							</li>
						))}

						<Link href={productUrl} target="_blank">
							<Button shape="iconic" theme="white" className={cn(sBtnShop)}>
								<SVG_Untappd />
							</Button>
						</Link>
					</ul>
				</div>
			</div>
		</Adaptive>
	);
};
