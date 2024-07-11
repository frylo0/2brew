import { globalStyle, style } from '@vanilla-extract/css';

import { sButton } from '@/components/common/Button/Button.css';
import { calc, colors, fonts } from '@/styles/bundle.css';

export const sMobileMenu = style({
	padding: '20px 0',
});

export const sModal = style({
	'@media': {
		[calc.width('>=', 'laptop')]: {
			display: 'none',
		},
	},
});

export const sOverlay = style({
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: colors.pink,
	overflow: 'auto',
	zIndex: 10000,

	'@media': {
		[calc.width('>=', 'laptop')]: {
			display: 'none',
		},
	},
});

export const sHeader = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
});

export const sLogo = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	fontSize: 20,
	lineHeight: '20px',
	alignItems: 'center',
	textTransform: `uppercase`,
	userSelect: 'none',
	pointerEvents: 'none',
	textAlign: 'center',
});

export const sButtonClose = style({
	width: 123,
	height: 46,
	fontSize: 16,
	fontWeight: 700,
	fontFamily: fonts.agrandirText,
});

export const sNav = style({
	marginBlockStart: 60,
});

export const sMenuList = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 60,
	alignItems: 'flex-end',
});

export const sMenuItem = style({
	fontFamily: fonts.agrandirGrand,
	fontSize: 30,
	fontWeight: 800,
	lineHeight: '36px',
	color: colors.white,
	textTransform: `uppercase`,
});

export const sSocialIcons = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 10,
	justifyContent: 'flex-end',
	marginBlockStart: 60,
});

globalStyle(`${sSocialIcons} ${sButton}`, {
	width: 46,
	height: 46,
});
