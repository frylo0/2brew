import { globalStyle, style } from '@vanilla-extract/css';

import SVG_BrewingBg from '@/assets/vector/brewing-bg.svg?url';
import SVG_Starmy from '@/assets/vector/starmy.svg?url';
import { fonts } from '@/styles/bundle.css';

export const sBrewAround = style({
	marginBlockStart: 100,
	marginBlockEnd: 120,
	background: `center no-repeat url(${SVG_BrewingBg.src})`,
	backgroundSize: '100% 100%',
});

export const sTitle = style({
	textTransform: `uppercase`,
	textAlign: 'center',
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	fontSize: 48,
	lineHeight: '57px',
	marginBlockEnd: 60,
});

export const sTopping = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
});

export const sGallery = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
	width: 'calc(100% - 300px - 30px)',
	justifyContent: 'flex-end',
});

export const sImage = style({
	width: 623,
	minWidth: 623,
	height: 498,
	position: 'relative',
	borderRadius: 80,
	overflow: 'hidden',
});

export const sDescription = style({
	fontFamily: fonts.agrandirNormal,
	fontSize: 20,
	lineHeight: '20px',
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
});

export const sStarmyTitle = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	fontSize: 30,
	lineHeight: '36px',
	textTransform: `uppercase`,
});

export const sStarmyDescr = style({
	fontFamily: fonts.agrandirNormal,
	fontSize: 20,
	lineHeight: '26px',
});
