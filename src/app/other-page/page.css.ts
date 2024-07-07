import { style } from '@vanilla-extract/css';

import { calc } from '@/styles/bundle.css';

const main = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '1em',
});

const button = style({
	'@media': {
		[calc.width('=', 'desktop')]: {
			width: '300px',
		},
		[calc.width('=', 'tablet')]: {
			width: '200px',
		},
		[calc.width('=', 'phone')]: {
			width: '100px',
		},
	},
});

export const s = {
	main,
	button,
};
