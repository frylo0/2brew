import cn from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import SVG_Arrow from '@/assets/vector/arrow.svg';
import { sArrow, sArrowSvg, sButton, svShape } from './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	shape?: keyof typeof svShape;
	noArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, children, shape = 'wide', noArrow = false, ...props }) => {
	const isWide = shape === 'wide';

	const isArrowVisible = isWide && !noArrow;

	return (
		<button className={cn(sButton, svShape[shape], className)} {...props}>
			<span>{children}</span>

			{isArrowVisible && (
				<span className={cn(sArrow)}>
					<SVG_Arrow className={cn(sArrowSvg)} />
				</span>
			)}
		</button>
	);
};
