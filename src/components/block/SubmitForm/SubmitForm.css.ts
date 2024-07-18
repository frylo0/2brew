import { globalStyle, style } from '@vanilla-extract/css';

import { calc, colors, font, fonts, fz } from '@/styles/bundle.css';

export const sSubmitForm = style({
	display: 'grid',
	gridTemplateRows: `auto auto`,
	gridTemplateColumns: `repeat(4, 1fr)`,
	gridTemplateAreas: `
		"title  title  title  tip   "
		"fields fields fields fields"`,
	gap: 60,
	backgroundColor: colors.yellow,
	border: `2px solid ${colors.black}`,
	borderRadius: 80,
	padding: '120px 60px',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gap: '60px 20px',
			padding: '120px 40px',
		},
		[calc.width('<=', 'tablet')]: {
			gridTemplateRows: `auto auto auto`,
			gridTemplateColumns: `auto`,
			gridTemplateAreas: `
				"title "
				"tip   "
				"fields"`,
			gap: 0,
		},
		[calc.width('<=', 'smartphone')]: {
			padding: '80px 20px',
			borderRadius: 40,
		},
	},
});

export const sTitle = style({
	...font(fonts.agrandirGrand, 800, 84, 100),
	textTransform: `uppercase`,
	gridArea: 'title',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			...fz(60, 72),
		},
		[calc.width('<=', 'smartphone')]: {
			...fz(30, 36),
		},
	},
});

export const sTip = style({
	textAlign: 'center',
	alignSelf: 'center',
	...font(fonts.agrandirNormal, 300, 20, 26),

	'@media': {
		[calc.width('<=', 'laptop')]: {
			...fz(16, 20),
		},
		[calc.width('<=', 'tablet')]: {
			textAlign: 'start',
			marginBlock: '20px 60px',
		},
		[calc.width('<=', 'smartphone')]: {
			marginBlock: '20px 30px',
		},
	},
});

export const sFields = style({
	display: 'flex',
	flexDirection: 'row',
	gridArea: 'fields',
	gap: 30,
	flexWrap: `wrap`,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gap: 20,
		},
		[calc.width('<=', 'smartphone')]: {
			gap: 10,
		},
	},
});

globalStyle(`${sFields} > *`, {
	width: 'calc(25% - 30px * 3 / 4)',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			width: 'calc(50% - 20px / 2)',
		},
		[calc.width('<=', 'smartphone')]: {
			width: '100%',
		},
	},
});

export const sBtn = style({
	justifyContent: 'space-between',
});

export const sSubmitFormModal = style({
	padding: 0,
	border: 'none',
	backgroundColor: 'transparent',
});

export const sSubmitSucceedModal = style({
	...font(fonts.agrandirNormal, 300, 20, 26),
	display: 'grid',
	gridTemplateRows: `auto`,
	gridTemplateColumns: `auto auto`,
	alignItems: 'center',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			...fz(16, 20),
		},
		[calc.width('<=', 'tablet')]: {
			gridTemplateRows: `auto auto`,
			gridTemplateColumns: 'auto',
			gap: 20,
		},
	},
});

export const sSucceedTitle = style({
	...font(fonts.agrandirGrand, 800, 84, 100),
	textTransform: `uppercase`,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			...fz(60, 72),
		},
		[calc.width('<=', 'smartphone')]: {
			...fz(30, 36),
		},
	},
});

globalStyle(`${sSubmitSucceedModal} p`, {
	'@media': {
		[calc.width('>=', 'laptop')]: {
			textAlign: 'center',
			maxWidth: 300,
		},
	},
});
