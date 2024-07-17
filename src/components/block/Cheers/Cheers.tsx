'use client';

import cn from 'clsx';
import { useMemo } from 'react';
import Marquee from 'react-marquee-slider';

import SVG_Star from '@/assets/vector/star-soft.svg';
import { sCell, sCheers, sStar, sWord } from './Cheers.css';

export interface CheersProps {
	className?: string;
}

const count = 20;

export const Cheers: React.FC<CheersProps> = ({ className = '' }) => {
	const list: number[] = useMemo(() => Array(count).fill(0), []);

	return (
		<section className={cn(sCheers, className)}>
			<Marquee
				direction="rtl"
				velocity={10}
				onInit={() => void 0}
				onFinish={() => void 0}
				resetAfterTries={100}
				scatterRandomly={false}
			>
				{list.map((_, i) => (
					<div className={cn(sCell)} key={i}>
						<span className={cn(sWord)} key={i}>
							Cheers
						</span>
						<SVG_Star className={cn(sStar)} />
					</div>
				))}
			</Marquee>
		</section>
	);
};
