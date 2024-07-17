import { style } from '@vanilla-extract/css';

import { calc, colors, fonts, fz } from '@/styles/bundle.css';

export const sWhereBuy = style({
	marginBlock: '100px 120px',

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			marginBlock: 80,
		},
	},
});

export const sTitle = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	...fz(48, 57),
	textTransform: `uppercase`,
	textAlign: 'center',
	marginBlockEnd: 60,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			...fz(30, 36),
		},
	},
});

export const sGrid = style({
	display: 'grid',
	gridTemplateRows: `140px 30px 140px`,
	gridTemplateColumns: `repeat(4, 1fr)`,
	gap: 30,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gap: 20,
		},
		[calc.width('<=', 'smartphone')]: {
			gap: 10,
		},
		[calc.width('<=', 'phone')]: {
			gridTemplateRows: `100px 20px 100px`,
		},
	},
});

export const sStore = style({
	backgroundColor: colors.pink,
	borderRadius: 40,
	border: `2px solid ${colors.black}`,
	display: 'flex',
	flexDirection: 'row',

	selectors: {
		'&:nth-child(1)': { gridRow: '1 / 3' },
		'&:nth-child(2)': { gridRow: '1 / 2' },
		'&:nth-child(3)': { gridRow: '1 / 3' },
		'&:nth-child(4)': { gridRow: '1 / 2' },
		'&:nth-child(5)': { gridRow: '3 / 4' },
		'&:nth-child(6)': { gridRow: '2 / 4' },
		'&:nth-child(7)': { gridRow: '3 / 4' },
		'&:nth-child(8)': { gridRow: '2 / 4' },
	},

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			borderRadius: 20,
		},
	},
});

export const sStoreFigure = style({
	width: '100%',
	height: '100%',
	position: 'relative',
});
