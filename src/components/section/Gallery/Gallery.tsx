'use client';

import cn from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-marquee-slider';

import PNG_Gallery1 from '@/assets/raster/gallery-1.png';
import PNG_Gallery2 from '@/assets/raster/gallery-2.png';
import PNG_Gallery3 from '@/assets/raster/gallery-3.png';
import PNG_Gallery4 from '@/assets/raster/gallery-4.png';
import PNG_Gallery5 from '@/assets/raster/gallery-5.png';
import PNG_Gallery6 from '@/assets/raster/gallery-6.png';
import PNG_Gallery7 from '@/assets/raster/gallery-7.png';
import { layoutFill } from '@/lib/nextjs-legacy';
import { sGallery, sSlide, sTitle } from './Gallery.css';

export interface GalleryProps {
	className?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ className = '' }) => {
	const images: StaticImageData[] = [
		PNG_Gallery1,
		PNG_Gallery2,
		PNG_Gallery3,
		PNG_Gallery4,
		PNG_Gallery5,
		PNG_Gallery6,
		PNG_Gallery7,
	];

	return (
		<section className={cn(sGallery, className)}>
			<h2 className={cn(sTitle)}>#CraftYourLife</h2>

			<Marquee
				direction="ltr"
				velocity={10}
				resetAfterTries={100}
				onInit={() => {}}
				onFinish={() => {}}
				scatterRandomly={false}
			>
				{images.map((image, i) => (
					<div className={cn(sSlide)} key={i}>
						<Image
							src={image}
							alt={`Gallery - ${i}`}
							style={{ ...layoutFill, objectFit: 'cover', objectPosition: 'center' }}
						/>
					</div>
				))}
			</Marquee>
		</section>
	);
};
