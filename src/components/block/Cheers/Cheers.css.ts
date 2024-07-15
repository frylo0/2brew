import { style } from '@vanilla-extract/css';

import { calc, colors, fonts } from '@/styles/bundle.css';

export const sCheers = style({
	marginBlock: 100,
	backgroundColor: colors.violet,
	position: 'relative',
	zIndex: 1,
	padding: '20px 0',
	userSelect: 'none',

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			padding: '10px 0',
			marginBlock: 60,
		},
	},
});

export const sCell = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: 30,
	marginInlineEnd: 30,
});

export const sWord = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	fontSize: 48,
	lineHeight: '57px',
	color: colors.pink,
	textTransform: `uppercase`,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			fontSize: 30,
			lineHeight: '36px',
		},
	},
});

export const sStar = style({});
