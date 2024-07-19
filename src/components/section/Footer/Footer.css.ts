import { globalStyle, style } from '@vanilla-extract/css';

import { sButton } from '@/components/common/Button/Button.css';
import { calc, colors, font, fonts, fz } from '@/styles/bundle.css';

export const sFooter = style({
	color: colors.white,
	backgroundColor: colors.black,
	paddingBlock: '100px calc(120px + 64px)',

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			paddingBlock: '60px calc(80px + 64px)',
		},
	},
});

export const sContent = style({});

export const sGrid = style({
	display: 'grid',
	gridTemplateRows: `auto auto`,
	gridTemplateColumns: `auto 300px`,
	gridTemplateAreas: `
		"meta   img"
		"social img"`,
	gap: '30px 64px',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gridTemplateRows: 'auto',
			gridTemplateColumns: 'auto',
			gridTemplateAreas: `
				"meta  "
				"social"`,
		},
	},
});

export const sTitle = style({
	...font(fonts.agrandirGrand, 800, 48, 57),
	textTransform: `uppercase`,
	marginBlockEnd: 60,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			...fz(30, 36),
		},
	},
});

export const sMetaData = style({
	display: 'flex',
	flexDirection: 'row',
	gap: '30px 60px',
	flexWrap: `wrap`,
	gridArea: 'meta',

	'@media': {
		[calc.width('<=', 'tablet')]: {
			gap: 30,
		},
		[calc.width('<=', 'smartphone')]: {
			gap: 20,
		},
	},
});

export const sSocial = style({
	gridArea: 'social',
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
});

globalStyle(`${sSocial} ${sButton}`, {
	padding: 0,
});

export const sFigure = style({
	gridArea: 'img',
	position: 'relative',
	width: 300,
	height: 215,
	borderRadius: 20,
	overflow: 'hidden',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			display: 'none',
		},
	},
});

export const sItem = style({
	...font(fonts.agrandirNormal, 300, 20, 26),
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
	whiteSpace: 'nowrap',

	'@media': {
		[calc.width('<=', 'phone')]: {
			whiteSpace: 'normal',
		},
	},
});

globalStyle(`${sItem} strong`, {
	fontWeight: 700,
});
