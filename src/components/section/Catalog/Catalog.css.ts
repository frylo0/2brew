import { style } from '@vanilla-extract/css';

import { calc, fonts, fz } from '@/styles/bundle.css';

export const sCatalog = style({
	marginBlock: 100,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			marginBlock: '60px 80px',
		},
	},
});

export const sTitle = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	...fz(48, 57),
	textTransform: `uppercase`,
	marginBlockEnd: 60,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			...fz(30, 36),
			marginBlockEnd: 40,
		},
	},
});

export const sGrid = style({
	display: 'grid',
	gridTemplateRows: `auto`,
	gridTemplateColumns: `repeat(4, 1fr)`,
	gap: 30,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gap: 20,
		},
		[calc.width('<=', 'tablet')]: {
			gridTemplateColumns: 'repeat(3, 1fr)',
		},
		[calc.width('<=', 'smartphone')]: {
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
		[calc.width('<=', 'phone')]: {
			gap: '20px 10px',
		},
		[calc.width('<=', 'zero')]: {
			gridTemplateColumns: '1fr',
		},
	},
});
