import { globalStyle, style } from '@vanilla-extract/css';

import { calc, colors, fonts, fz } from '@/styles/bundle.css';

export const sProduct = style({
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 20,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gap: 10,
		},
	},
});

export const sImage = style({
	position: 'relative',
	width: 190,
	height: 360,

	'@media': {
		[calc.width('<=', 'phone')]: {
			width: 155,
			height: 293,
		},
	},
});

export const sImg = style({
	transition: 'transform 0.5s ease-out',

	selectors: {
		[`${sProduct}:hover &`]: {
			transform: 'rotate(15deg)',
		},
	},
});

export const sArrow = style({
	backgroundColor: colors.white,
	border: `2px solid ${colors.black}`,
	borderRadius: 100,
	padding: 11,
	position: 'absolute',
	top: 20,
	right: -15,
	boxShadow: `4px 4px 0 0 transparent`,
	transitionDuration: '0.5s',
	transitionTimingFunction: 'ease-out',
	transitionProperty: 'transform, box-shadow',

	selectors: {
		[`${sProduct}:hover &`]: {
			transform: 'rotate(45deg)',
			backgroundColor: colors.pink,
			boxShadow: `5px 0px 0 0 ${colors.black}`,
		},
	},
});

globalStyle(`${sArrow} svg`, {
	fill: colors.black,
	display: `block`,
});

export const sFooter = style({
	display: 'grid',
	gridTemplateRows: `auto auto`,
	gridTemplateColumns: `auto 71px`,
	gridTemplateAreas: `
		"cat  price"
		"name price"`,
	padding: '15px 30px',
	backgroundColor: colors.yellow,
	gap: '2px 10px',
	borderRadius: 100,
	border: `2px solid ${colors.black}`,
	fontFamily: fonts.agrandirNormal,
	fontWeight: 400,
	width: 300,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			width: 'auto',
			minWidth: '100%',
			padding: '14px 20px',
		},
		[calc.width('<=', 'phone')]: {
			position: 'relative',
			gridTemplateAreas: `
				"cat  cat"
				"name name"`,
			padding: '6px 16px',
		},
	},
});

export const sCategory = style({
	gridArea: 'cat',
	...fz(14, 14),
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
});

export const sName = style({
	gridArea: 'name',
	fontWeight: 600,
	...fz(20, 20),
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
});

export const sPrice = style({
	gridArea: 'price',
	alignSelf: 'center',
	backgroundColor: colors.white,
	padding: '8px 16px',
	borderRadius: 100,
	...fz(16, 16),
	fontWeight: 600,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'flex-start',
	justifyContent: 'center',

	'@media': {
		[calc.width('<=', 'phone')]: {
			position: 'absolute',
			top: -70,
			right: 0,
		},
	},
});

globalStyle(`${sPrice} sup`, {
	...fz(9, 10),
});
