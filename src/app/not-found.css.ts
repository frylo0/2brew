import { globalStyle, style } from '@vanilla-extract/css';

import PNG_PageBG from '@/assets/raster/page-bg.png';
import { sNotARealWebsite } from '@/components/block/NotARealWebsite/NotARealWebsite.css';
import { calc, colors, fonts } from '@/styles/bundle.css';

export const sMain = style({
	background: `url(${PNG_PageBG.src})`,
	height: '100svh',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
});

export const sCurve = style({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100%',
});

export const sContent = style({
	position: 'relative',
	zIndex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	'@media': {
		[calc.width.between('tablet', 'laptop')]: {
			transform: 'scale(0.7)',
		},
		[calc.width.between('smartphone', 'tablet')]: {
			transform: 'scale(0.6)',
		},
		[calc.width('<=', 'smartphone')]: {
			transform: 'scale(0.65)',
		},
		[calc.width('<=', 'smartphone') + ` and (max-height: 700px)`]: {
			transform: 'scale(0.45)',
		},
	},
});

export const sFigure = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	position: 'relative',
	width: 1210,
	pointerEvents: 'none',
	userSelect: 'none',

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			flexDirection: 'column',
			width: 'auto',
		},
	},
});

export const sNumber = style({
	fontFamily: fonts.agrandirGrand,
	fontSize: 500,
	fontWeight: 800,
	lineHeight: '600px',

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			fontSize: 400,
			lineHeight: '1.2',
		},
	},
});

export const sCan = style({
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
});

export const sCanImage = style({
	position: 'relative',
	zIndex: 3,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			transform: 'scale(0.8)',
		},
	},
});

export const sCanShadowSmall = style({
	position: 'absolute',
	left: 388 - 268,
	top: 155,
	zIndex: 2,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			transform: 'scale(0.8)',
		},
	},
});

export const sCanShadowLarge = style({
	position: 'absolute',
	left: -297,
	top: -141,
	zIndex: 1,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			transform: 'scale(0.8)',
		},
	},
});

export const sLabel = style({
	fontFamily: fonts.agrandirGrand,
	fontSize: 30,
	fontWeight: 800,
	lineHeight: '36px',
	textAlign: 'center',
	textTransform: `uppercase`,
	marginBlockEnd: 30,
});

export const sCopyright = style({
	fontFamily: fonts.agrandirText,
	fontSize: 14,
	lineHeight: '14px',
	color: colors.grey,
	marginBlockStart: 91,
});

globalStyle(`div${sNotARealWebsite}`, {
	display: 'none',
});
