import { keyframes, style } from '@vanilla-extract/css';

import { fonts } from '@/styles/bundle.css';

export const sPreview = style({
	marginBlockStart: 100,
	marginBlockEnd: 50,
});

export const sHeader = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 60,
	alignItems: 'center',
});

export const sTitle = style({
	fontFamily: fonts.agrandirGrand,
	fontSize: 84,
	fontWeight: 800,
	lineHeight: '100px',
	textTransform: `uppercase`,
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
});

export const sTrigger = style({
	padding: '15px 30px',
	width: 'fit-content',
});

export const sCan = style({});

export const sBeers = style({
	position: 'relative',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	marginBlockStart: 60,
});

export const sBeersRow = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
});

export const sBeersCurrent = style({});

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
});

export const sFooter = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});
