import { globalStyle, style } from '@vanilla-extract/css';

import SVG_BrewingBg from '@/assets/vector/brewing-bg.svg?url';
import SVG_Starmy from '@/assets/vector/starmy.svg?url';
import { calc, fonts } from '@/styles/bundle.css';

export const sBrewAround = style({
	marginBlockStart: 100,
	marginBlockEnd: 120,
	position: 'relative',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			marginBlockEnd: 100,
		},
		[calc.width('<=', 'smartphone')]: {
			marginBlockStart: 60,
			marginBlockEnd: 60,
		},
	},
});

export const sBg = style({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	zIndex: 0,
	height: 1377,
	width: '100%',
	background: `center/cover no-repeat url(${SVG_BrewingBg.src})`,

	'@media': {
		[calc.width('>=', 'desktop')]: {
			backgroundSize: '100% 100%',
		},
	},
});

export const sContent = style({
	position: 'relative',
});

export const sTitle = style({
	textTransform: `uppercase`,
	textAlign: 'center',
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	fontSize: 48,
	lineHeight: '57px',
	marginBlockEnd: 60,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			fontSize: 30,
			lineHeight: '36px',
			marginBlockEnd: 40,
		},
	},
});

export const sTopping = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gap: 20,
		},
		[calc.width('<=', 'smartphone')]: {
			flexDirection: 'column',
		},
	},
});

export const sGallery = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
	width: 'calc(100% - 300px - 30px)',
	justifyContent: 'flex-end',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			gap: 20,
		},
		[calc.width('<=', 'smartphone')]: {
			width: '100%',
		},
	},
});

export const sImage = style({
	width: 623,
	minWidth: 623,
	height: 498,
	position: 'relative',
	borderRadius: 80,
	overflow: 'hidden',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			width: 300,
			minWidth: 300,
			height: 324,

			':first-child': {
				width: 600,
				minWidth: 600,
			},
		},
		[calc.width('<=', 'tablet')]: {
			width: 204,
			minWidth: 204,
			borderRadius: 40,
		},
		[calc.width('<=', 'smartphone')]: {
			width: 220,
			minWidth: 220,
			height: 200,

			':first-child': {
				width: 500,
				minWidth: 500,
			},
		},
		[calc.width('<=', 'phone')]: {
			width: 160,
			minWidth: 160,

			':first-child': {
				width: 400,
				minWidth: 400,
			},
		},
	},
});

export const sDescription = style({
	fontFamily: fonts.agrandirNormal,
	fontSize: 20,
	lineHeight: '20px',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			fontSize: 16,
			lineHeight: '20px',
			minWidth: 300,
		},
	},
});

globalStyle(`${sDescription} p:not(:first-child)`, {
	marginBlockStart: 30,
});

export const sOptions = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	gap: 30,
	marginBlockStart: 120,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			marginBlockStart: 100,
			alignItems: 'flex-start',
		},
		[calc.width('<=', 'smartphone')]: {
			flexDirection: 'column',
			gap: 20,
			marginBlockStart: 60,
		},
	},
});

export const sStarmy = style({
	background: `center/contain no-repeat url(${SVG_Starmy.src})`,
	width: 410,
	height: 410,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: '0 60px',
	gap: 10,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			background: 'none',
			padding: 0,
			flex: 1,
			width: 'auto',
			height: 'auto',
		},
	},
});

export const sStarmyTitle = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	fontSize: 30,
	lineHeight: '36px',
	textTransform: `uppercase`,

	'@media': {
		[calc.width('<=', 'laptop')]: {
			fontSize: 20,
			lineHeight: '24px',
		},
	},
});

export const sStarmyDescr = style({
	fontFamily: fonts.agrandirNormal,
	fontSize: 20,
	lineHeight: '26px',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			fontSize: 16,
			lineHeight: '20px',
		},
	},
});
