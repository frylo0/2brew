import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import PNG_CanOfBeer from '@/assets/raster/can-of-beer-damaged.png';
import SVG_ShadowLarge from '@/assets/vector/404-can-shadow-large.svg';
import SVG_ShadowSmall from '@/assets/vector/404-can-shadow-small.svg';
import SVG_Curve from '@/assets/vector/404-curve.svg';
import { Button } from '@/components/common/Button/Button';
import {
	sCan,
	sCanImage,
	sCanShadowLarge,
	sCanShadowSmall,
	sContent,
	sCopyright,
	sCurve,
	sFigure,
	sLabel,
	sMain,
	sNumber,
} from './not-found.css';

export default function Page() {
	return (
		<main className={cn(sMain)}>
			<SVG_Curve className={cn(sCurve)} />

			<div className={cn(sContent)}>
				<figure className={cn(sFigure)}>
					<span className={cn(sNumber)}>4</span>

					<div className={cn(sCan)}>
						<Image
							className={cn(sCanImage)}
							src={PNG_CanOfBeer}
							alt="Can of Beer Damaged"
							width={694}
							height={599}
							priority={true}
						/>

						<SVG_ShadowSmall className={cn(sCanShadowSmall)} />
						<SVG_ShadowLarge className={cn(sCanShadowLarge)} />
					</div>

					<span className={cn(sNumber)}>4</span>
				</figure>

				<p className={cn(sLabel)}>We drank all the beer here, we&apos;re not sorry</p>

				<Link href="/">
					<Button>Return to home page</Button>
				</Link>

				<div className={cn(sCopyright)}>© {new Date().getFullYear()} Two Chefs Brewing</div>
			</div>
		</main>
	);
}
