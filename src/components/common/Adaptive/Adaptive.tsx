import cn from 'clsx';
import { HTMLAttributes } from 'react';

import { sAdaptive } from './Adaptive.css';

export interface AdaptiveProps extends React.PropsWithChildren, HTMLAttributes<HTMLElement> {
	className?: string;
}

export const Adaptive: React.FC<AdaptiveProps> = ({ className = '', children, ...props }) => {
	return (
		<div className={cn(sAdaptive, className)} {...props}>
			{children}
		</div>
	);
};
