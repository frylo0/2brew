import cn from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import SVG_Arrow from '@/assets/vector/arrow.svg';
import { sArrow, sArrowSvg, sButton, svShape } from './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	shape?: keyof typeof svShape;
}

export const Button: React.FC<ButtonProps> = ({ className, children, shape = 'wide', ...props }) => {
	const isWide = shape === 'wide';

	return (
		<button className={cn(sButton, svShape[shape], className)} {...props}>
			<span>{children}</span>

			{isWide && (
				<span className={cn(sArrow)}>
					<SVG_Arrow className={cn(sArrowSvg)} />
				</span>
			)}
		</button>
	);
};
