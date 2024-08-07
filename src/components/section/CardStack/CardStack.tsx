'use client';

import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import SVG_Untappd from '@/assets/vector/untappd.svg';
import { SubmitFormModal, SubmitFormProps, SubmitSucceedModal } from '@/components/block/SubmitForm/SubmitForm';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { Button } from '@/components/common/Button/Button';
import { IBeer } from '@/db/models/beer';
import { layoutFill } from '@/lib/nextjs-legacy';
import { destructFloat } from '@/lib/number';
import PNG_BockBrulle from '@/public/images/beer/bock-brulle.png';
import { useBeers$ } from '@/stores/beers.store';
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
	product?: IBeer | null;
}

export const CardStack: React.FC<CardStackProps> = ({ className = '', product = null }) => {
	const { sendOrder } = useBeers$();

	const category: string = product?.category ?? 'Pastry bock';

	const title: string = product?.name ?? 'Bòck Brûlée';
	const subtitle: string = 'caramel & Vanilla';

	const description: string =
		'Summer has come and gone, but hey, our sturdy Bock is back!' +
		" Whether you're lounging indoors or exploring the woods, the Bòck Brûlée is right there with you." +
		" We've combined roasted malts, caramel flavors, a hint of vanilla," +
		" and a touch of sweetness to create a dessert in a glass that's simply irresistible." +
		" No need for a fancy roaster, but it's even better by a crackling fire.";

	const price: number = product?.price ?? 2.3;
	const options: Record<string, { price: number }> = {
		'1 stuk': { price: price },
		'3 + 1 stuks': { price: price * 3 },
		'6 + 2 stuks': { price: price * 6 },
		'12 + 4 stuks': { price: price * 12 },
	};
	const optionsList = Object.entries(options);

	const imageSrc: string = product?.image ? `/images/beer/${product?.image}` : PNG_BockBrulle.src;
	const imageWidth: number = PNG_BockBrulle.width;
	const imageHeight: number = PNG_BockBrulle.height;

	const slogan: string = 'Pumpkin spice? Forget about it! the third edition of our autumn buddy is all you need';

	const features: Record<string, string> = {
		Alcohol: '7%',
		Destiny: '16%',
		Units: '20',
	};

	const productUrl: string = '#!';

	const [formOpened, setFormOpened] = useState(false);
	const [thanksOpened, setThanksOpened] = useState(false);

	const [optionI, setOptionI] = useState(0);
	const [optionName, optionMetaData] = optionsList[optionI];

	const { int: priceInt, fract: priceFract } = destructFloat(optionMetaData.price);

	const handleOptionClick = (i: number) => () => {
		setOptionI(i);
	};

	const handleOrderClick = () => setFormOpened(true);

	const handleFormClose = () => setFormOpened(false);

	const handleFormSubmit: SubmitFormProps['onSubmit'] = async (formData, product, option) => {
		const sent: boolean = await sendOrder(formData, product, option);

		if (!sent) return;

		setFormOpened(false);
		setThanksOpened(true);
	};

	const handleThanksClose = () => setThanksOpened(false);

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
						<Image src={imageSrc} alt={title} width={imageWidth} height={imageHeight} style={layoutFill} />
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

			<SubmitFormModal
				product={{ category, name: title, image: imageSrc.split('/').pop()!, price }}
				option={optionName}
				opened={formOpened}
				onClose={handleFormClose}
				onSubmit={handleFormSubmit}
			/>
			<SubmitSucceedModal opened={thanksOpened} onClose={handleThanksClose} />
		</Adaptive>
	);
};
