import { globalStyle, style } from '@vanilla-extract/css';

import { calc, colors, fonts } from '@/styles/bundle.css';

export const sNotARealWebsite = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	position: 'fixed',
	bottom: 0,
	left: 0,
	right: 0,
	background: colors.black,
	color: colors.white,
	fontFamily: fonts.agrandirText,
	padding: '1em 2em',
	zIndex: 10000,
	gap: '2em',
});

export const sTextDesktop = style({
	'@media': {
		[calc.width('<=', 'tablet')]: {
			display: 'none',
		},
	},
});

export const sTextMobile = style({
	display: 'flex',
	flexDirection: 'row',
	gap: '0.5em',
	alignItems: 'center',

	'@media': {
		[calc.width('>=', 'laptop')]: {
			display: 'none',
		},
		[calc.width('<=', 'phone')]: {
			fontSize: 12,
		},
	},
});

export const sSources = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '0.5em',
});

export const sButton = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	borderRadius: 100,
	padding: '6px 12px',
	gap: '0.5em',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			padding: '6px',
		},
	},
});

export const sBehance = style({
	background: '#1769ff',
	color: colors.white,
});

export const sIcon = style({
	width: 20,
	height: 20,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',

	selectors: {
		[`${sBehance} &`]: {
			filter: 'grayscale(1)',
		},
	},
});

globalStyle(`${sIcon} svg`, {
	maxWidth: '100%',
	maxHeight: '100%',
});

export const sTitle = style({
	'@media': {
		[calc.width('<=', 'laptop')]: {
			display: 'none',
		},
	},
});

export const sGitHub = style({
	background: '#eee',
	color: colors.black,
});

export const s2Brew = style({
	background: '#EF4445',
	color: colors.white,
});
