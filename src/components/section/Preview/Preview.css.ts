import { keyframes, style } from '@vanilla-extract/css';

import { calc, fonts } from '@/styles/bundle.css';

export const sPreview = style({
	marginBlockStart: 100,
	marginBlockEnd: 50,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			marginBlockStart: 60,
			marginBlockEnd: 30,
		},
	},
});

export const sHeader = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 60,
	alignItems: 'center',
	justifyContent: 'space-between',

	'@media': {
		[calc.width('<=', 'tablet')]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: 10,
		},
	},
});

export const sTitle = style({
	fontFamily: fonts.agrandirGrand,
	fontSize: 84,
	fontWeight: 800,
	lineHeight: '100px',
	textTransform: `uppercase`,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			fontSize: 57,
			lineHeight: '72px',
		},
		[calc.width('<=', 'smartphone')]: {
			fontSize: 48,
			lineHeight: '57px',
		},
		[calc.width('<=', 'phone')]: {
			fontSize: 40,
			lineHeight: '50px',
		},
	},
});

export const sTitleBr = style({
	'@media': {
		[calc.width('>=', 'desktop')]: {
			display: 'none',
		},
	},
});

export const sTitleBrPhone = style({
	'@media': {
		[calc.width('>=', 'tablet')]: {
			display: 'none',
		},
	},
});

export const sForm = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 30,
	fontFamily: fonts.agrandirText,
	fontSize: 20,
	lineHeight: '26px',
	textAlign: 'center',
	alignItems: 'center',
	maxWidth: 300,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			fontSize: 16,
			lineHeight: '20px',
			gap: 17,
			maxWidth: 210,
		},
		[calc.width('<=', 'tablet')]: {
			maxWidth: 'unset',
			alignItems: 'flex-start',
			textAlign: 'start',
			gap: 30,
		},
		[calc.width('<=', 'smartphone')]: {
			width: '100%',
		},
	},
});

export const sLinkPrimary = style({
	'@media': {
		[calc.width('<=', 'phone')]: {
			width: '100%',
		},
	},
});

export const sTriggerPrimary = style({
	padding: '15px 30px',
	width: 'fit-content',

	'@media': {
		[calc.width('<=', 'tablet')]: {
			width: 260,
		},
		[calc.width('<=', 'phone')]: {
			width: '100%',
			justifyContent: 'space-between',
		},
	},
});

export const sLinkSecondary = style({
	'@media': {
		[calc.width('<=', 'phone')]: {
			width: '100%',
		},
	},
});

export const sTriggerSecondary = style({
	padding: '15px 30px',
	width: 'fit-content',

	'@media': {
		[calc.width('<=', 'phone')]: {
			width: '100%',
			justifyContent: 'space-between',
		},
	},
});

export const sCan = style({
	position: 'relative',

	'@media': {
		[calc.width('>=', 'desktop')]: {
			width: 300,
			height: 570,
		},
		[calc.width('<=', 'laptop')]: {
			width: 215,
			minWidth: 215,
			height: 400,
		},
		[calc.width('<=', 'smartphone')]: {
			width: 170,
			minWidth: 170,
			height: 315,
		},
		[calc.width('<=', 'phone')]: {
			width: 130,
			minWidth: 130,
			height: 250,
		},
	},
});

export const sBeers = style({
	position: 'relative',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	marginBlockStart: 60,

	'@media': {
		[calc.width('<=', 'tablet')]: {
			width: 'calc(100% + 20px * 2)',
			marginInlineStart: -20,
			overflow: 'hidden',
		},
		[calc.width('<=', 'smartphone')]: {
			marginBlockStart: 40,
		},
	},
});

export const sBeersRow = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
	justifyContent: 'space-between',
	width: '100%',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gap: 20,
		},
		[calc.width('<=', 'tablet')]: {
			justifyContent: 'center',
		},
	},
});

const aFadeIn = keyframes({
	'0%': {
		opacity: 0,
	},
	'100%': {
		opacity: 1,
	},
});

export const sBeersAnimated = style({
	animation: `${aFadeIn} 2s ease`,
	zIndex: 1,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});

export const sSubtitle = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	fontSize: 48,
	lineHeight: '57px',
	textAlign: 'center',
	textTransform: `uppercase`,
	marginBlockStart: 100,
	marginBlockEnd: 30,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			fontSize: 30,
			lineHeight: '36px',
			marginBlockStart: 60,
		},
	},
});

export const sFooter = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});
