import { style } from '@vanilla-extract/css';

import { calc, colors, fonts } from '@/styles/bundle.css';

export const sAgeRestrict = style({
	display: 'flex',
	gap: 60,

	'@media': {
		[calc.width('>=', 'laptop')]: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		[calc.width('<=', 'tablet')]: {
			flexDirection: 'column',
		},
		[calc.width('<=', 'smartphone')]: {
			gap: 30,
		},
	},
});

export const sTitle = style({
	fontSize: 74,
	fontWeight: 800,
	fontFamily: fonts.agrandirGrand,
	lineHeight: '100px',
	textTransform: `uppercase`,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			fontSize: 60,
			lineHeight: '72px',
		},
		[calc.width('<=', 'smartphone')]: {
			fontSize: 30,
			lineHeight: '36px',
		},
	},
});

export const sForm = style({
	display: 'flex',
	gap: 30,
	fontFamily: fonts.agrandirText,
	fontWeight: 400,
	fontSize: 20,
	lineHeight: '26px',

	'@media': {
		[calc.width('>=', 'laptop')]: {
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
		},
		[calc.width('=', 'tablet')]: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 60,
		},
		[calc.width('<=', 'smartphone')]: {
			flexDirection: 'column',
			gap: 30,
		},
	},
});

export const sControls = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
});

export const sButtonCancel = style({
	background: colors.white,
});
