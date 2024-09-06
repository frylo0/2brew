'use client';

import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useInterval } from 'usehooks-ts';

import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { Button } from '@/components/common/Button/Button';
import { beer } from '@/constants/beers';
import { layoutFill } from '@/lib/nextjs-legacy';
import { randUniqIntList } from '@/lib/rand';
import {
	sBeers,
	sBeersAnimated,
	sBeersRow,
	sCan,
	sFooter,
	sForm,
	sHeader,
	sLinkPrimary,
	sLinkSecondary,
	sPreview,
	sSubtitle,
	sTitle,
	sTitleBr,
	sTitleBrPhone,
	sTriggerPrimary,
	sTriggerSecondary,
} from './Preview.css';

export interface PreviewProps {
	className?: string;
}

export const Preview: React.FC<PreviewProps> = ({ className = '' }) => {
	const beers = useMemo(() => Object.values(beer), []);

	const [step, setStep] = useState(0);
	const isEvenStep = step % 2 === 0;

	const [listA4Beers, setListA4Beers] = useState<typeof beers>([]);
	const [listB4Beers, setListB4Beers] = useState<typeof beers>([]);

	const shiftBeerSlides = () => {
		const new4Beers = randUniqIntList(4, 0, beers.length - 1).map((index) => beers[index]);

		if (isEvenStep) setListA4Beers(new4Beers);
		else setListB4Beers(new4Beers);

		if (listA4Beers.length === 0) setListA4Beers(new4Beers);
		if (listB4Beers.length === 0) setListB4Beers(new4Beers);

		setStep((v) => v + 1);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(shiftBeerSlides, []);
	useInterval(shiftBeerSlides, 5000);

	return (
		<Adaptive as="section" className={cn(sPreview, className)}>
			<header className={cn(sHeader)}>
				<h1 className={cn(sTitle)}>
					Beer
					<br className={cn(sTitleBrPhone)} /> is an art
					<br className={cn(sTitleBr)} /> you can
					<br className={cn(sTitleBrPhone)} /> drink
				</h1>

				<div className={cn(sForm)}>
					<p>We have everything we need for a real beer gourmet, from classic to exotic!</p>

					<Link href="#catalog" className={cn(sLinkPrimary)}>
						<Button className={cn(sTriggerPrimary)}>Buy in bulk</Button>
					</Link>
				</div>
			</header>

			<div className={cn(sBeers)}>
				<figure className={cn(sBeersRow, !isEvenStep && sBeersAnimated)}>
					{listA4Beers.map((beer, i) => (
						<div className={cn(sCan)} key={i}>
							<Image src={beer.image} alt={beer.name} style={layoutFill} />
						</div>
					))}
				</figure>

				<figure className={cn(sBeersRow, isEvenStep && sBeersAnimated)}>
					{listB4Beers.map((beer, i) => (
						<div className={cn(sCan)} key={i}>
							<Image src={beer.image} alt={beer.name} style={layoutFill} />
						</div>
					))}
				</figure>
			</div>

			<footer className={cn(sFooter)}>
				<p className={cn(sSubtitle)}>16+ flavors</p>

				<Link href="#!" className={cn(sLinkSecondary)}>
					<Button className={cn(sTriggerSecondary)}>Choose your taste</Button>
				</Link>
			</footer>
		</Adaptive>
	);
};
