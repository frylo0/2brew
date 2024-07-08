import { globalStyle, style } from '@vanilla-extract/css';

import { sButton } from '@/components/common/Button/Button.css';
import { calc, colors, fonts } from '@/styles/bundle.css';

export const sHeader = style({});

export const sContent = style({
	position: 'relative',
	height: 20 * 2 + 46,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
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

export const sLogoBr = style({
	'@media': {
		[calc.width('>=', 'desktop')]: {
			display: 'none',
		},
	},
});

export const sMenu = style({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: `translate(-50%, -50%)`,
	border: `2px solid ${colors.black}`,
	borderRadius: 100,
	padding: '16px 40px',
	backgroundColor: colors.white,
	fontFamily: fonts.agrandirNormal,

	'@media': {
		[calc.width('<=', 'tablet')]: {
			display: 'none',
		},
	},
});

export const sMenuList = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
});

export const sMenuItem = style({
	color: colors.grey,
	transition: 'color 0.5s ease, margin-inline-end 0.5s ease',
	position: 'relative',

	':hover': {
		color: colors.black,
		marginInlineEnd: 10,
	},

	'::after': {
		content: '',
		display: `inline-block`,
		bottom: 6,
		right: -16,
		position: 'absolute',
		width: 6,
		height: 6,
		borderRadius: 100,
		backgroundColor: colors.black,
		opacity: 0,
		transition: 'opacity 0.5s ease',
	},

	selectors: {
		'&:hover::after': {
			opacity: 1,
		},
	},
});

export const sAside = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 10,
});

export const sSocialLinks = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 10,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			display: 'none',
		},
	},
});

globalStyle(`${sSocialLinks} ${sButton}`, {
	width: 46,
	height: 46,
});

export const sMenuButton = style({
	width: 123,
	height: 46,
	fontWeight: 700,
	fontSize: 16,
	fontFamily: fonts.agrandirText,
	backgroundColor: colors.white,

	':hover': {
		backgroundColor: colors.pink,
	},

	'@media': {
		[calc.width('>=', 'laptop')]: {
			display: 'none',
		},
	},
});
