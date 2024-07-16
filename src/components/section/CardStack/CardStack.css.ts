import { globalStyle, style } from '@vanilla-extract/css';

import { sButton } from '@/components/common/Button/Button.css';
import { calc, colors, fonts, fz } from '@/styles/bundle.css';

export const sCardStack = style({
	position: 'relative',
	zIndex: 1,

	marginBlockStart: 120,
	marginBlockEnd: 100,

	fontFamily: fonts.agrandirNormal,
	fontSize: 20,
	lineHeight: '26px',

	':before': {
		content: '',
		position: 'absolute',
		width: 'calc(100% - 40px * 2)',
		top: -20,
		left: 40,
		backgroundColor: colors.pink,
		border: `2px solid ${colors.black}`,
		height: 200,
		borderRadius: 80,
	},
	':after': {
		content: '',
		position: 'absolute',
		width: 'calc(100% - 20px * 2)',
		top: -10,
		left: 20,
		backgroundColor: colors.violet,
		border: `2px solid ${colors.black}`,
		height: 200,
		borderRadius: 80,
	},

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			...fz(16, 20),

			':after': {
				display: 'none',
			},
			':before': {
				display: 'none',
			},
		},
		[calc.width('<=', 'phone')]: {
			width: '100%',
			marginInline: 0,
			marginBlockStart: 80,
			marginBlockEnd: 60,
		},
	},
});

export const sBg = style({
	position: 'relative',
	backgroundColor: colors.yellow,
	padding: '120px 60px',
	borderRadius: 80,
	border: `2px solid ${colors.black}`,
	zIndex: 1,

	display: 'flex',
	flexDirection: 'row',
	gap: 60,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			flexDirection: 'column-reverse',
			gap: 40,
			padding: '120px 40px',
		},
		[calc.width('<=', 'smartphone')]: {
			gap: 20,
			padding: '80px 20px',
			borderRadius: 40,
		},
	},
});

export const sContent = style({});

export const sCategory = style({});

export const sTitle = style({
	marginBlockStart: 10,
	fontFamily: fonts.agrandirGrand,
	fontSize: 48,
	lineHeight: '57px',
	textTransform: `uppercase`,
	fontWeight: 800,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			...fz(30, 36),
			marginBlockStart: 5,
		},
	},
});

export const sSubtitle = style({
	marginBlockStart: 10,
	fontFamily: fonts.agrandirGrand,
	fontSize: 30,
	lineHeight: '36px',
	textTransform: `uppercase`,
	fontWeight: 800,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			...fz(20, 24),
			marginBlockStart: 5,
		},
	},
});

export const sDescription = style({
	marginBlockStart: 20,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			marginBlockStart: 10,
		},
	},
});

export const sOptions = style({
	marginBlockStart: 30,
	display: 'flex',
	flexDirection: 'row',
	gap: 10,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			flexWrap: `wrap`,
		},
	},
});

export const sOption = style({});

globalStyle(`${sOption} ${sButton}`, {
	padding: '9px 16px',
	backgroundColor: 'transparent',
	fontFamily: fonts.agrandirText,
	fontWeight: 500,
	whiteSpace: 'nowrap',
	...fz(16, 16),

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			padding: '6px 12px',
		},
	},
});

export const sOptionSelected = style({});

globalStyle(`${sOptionSelected} ${sButton}`, {
	backgroundColor: colors.white,
	borderColor: colors.white,
});

export const sFooter = style({
	marginBlockStart: 20,
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
	alignItems: 'center',

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			gap: 40,
		},
	},
});

export const sPrice = style({
	fontFamily: fonts.agrandirGrand,
	fontSize: 30,
	lineHeight: '36px',
	fontWeight: 800,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'flex-start',
});

globalStyle(`${sPrice} sup`, {
	fontSize: 20,
	lineHeight: '24px',
	marginInlineEnd: 6,
});

export const sBtnOrder = style({
	'@media': {
		[calc.width('<=', 'smartphone')]: {
			width: '100%',
			justifyContent: 'space-between',
		},
	},
});

export const sPresentation = style({
	display: 'grid',
	gridTemplateRows: `auto auto`,
	gridTemplateColumns: `auto auto`,
	gridTemplateAreas: `
		"img slogan"
		"img features"`,
	gap: '40px 60px',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gap: 40,
		},
		[calc.width('<=', 'smartphone')]: {
			gridTemplateAreas: `
				"img slogan"
				"features features"`,
			gap: 20,
		},
	},
});

export const sImage = style({
	position: 'relative',
	width: 240,
	height: 453,
	minWidth: 240,
	gridArea: 'img',

	'@media': {
		[calc.width('<=', 'tablet')]: {
			width: 215,
			minWidth: 'unset',
			height: 400,
		},
		[calc.width('<=', 'smartphone')]: {
			width: 130,
			height: 250,
		},
	},
});

export const sSlogan = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	fontSize: 30,
	lineHeight: '36px',
	textTransform: `uppercase`,
	gridArea: 'slogan',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			alignSelf: 'end',
		},
		[calc.width('<=', 'smartphone')]: {
			alignSelf: 'center',
			...fz(20, 24),
		},
		[calc.width('<=', 'phone')]: {
			...fz(16, 19),
		},
	},
});

export const sFeatures = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
	gridArea: 'features',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			alignSelf: 'start',
			alignItems: 'center',
		},
	},
});

export const sFeat = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
});

export const sFeatValue = style({
	fontWeight: 700,
	fontSize: 20,
	lineHeight: '20px',
});

export const sFeatName = style({
	fontSize: 14,
	lineHeight: '14px',
});

export const sBtnShop = style({
	padding: 1,
});
