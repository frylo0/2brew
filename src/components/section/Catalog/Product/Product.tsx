import cn from 'clsx';
import Image from 'next/image';

import SVG_Arrow from '@/assets/vector/arrow.svg';
import { IBeer } from '@/db/models/beer';
import { layoutFill } from '@/lib/nextjs-legacy';
import { destructFloat } from '@/lib/number';
import { sArrow, sCategory, sFooter, sImage, sImg, sName, sPrice, sProduct } from './Product.css';

export interface ProductProps {
	className?: string;

	image: string;
	name: string;
	category: string;
	price: number;

	onClick?: (item: IBeer) => void;
}

export const Product: React.FC<ProductProps> = ({
	className = '',

	image,
	name,
	category,
	price,

	onClick,
}) => {
	const imageSrc: string = `/images/beer/${image}`;
	const imageWidth: number = 190;
	const imageHeight: number = 360;

	const { int: priceInt, fract: priceFract } = destructFloat(price);

	const handleClick = () => {
		onClick?.({ image, price, name, category });
	};

	return (
		<li className={cn(sProduct, className)} onClick={handleClick}>
			<figure className={cn(sImage)}>
				<Image
					className={cn(sImg)}
					src={imageSrc}
					alt={name}
					width={imageWidth}
					height={imageHeight}
					style={layoutFill}
				/>

				<div className={cn(sArrow)}>
					<SVG_Arrow width={24} height={24} />
				</div>
			</figure>

			<footer className={cn(sFooter)}>
				<p className={cn(sCategory)}>{category}</p>
				<p className={cn(sName)}>{name}</p>

				<div className={cn(sPrice)}>
					{priceInt}
					<sup>{priceFract}</sup>&nbsp;€
				</div>
			</footer>
		</li>
	);
};
