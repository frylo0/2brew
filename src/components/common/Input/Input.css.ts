import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/styles/bundle.css';

export const sInput = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	borderRadius: 100,
	border: `2px solid ${colors.black}`,
	padding: '0 30px',
	fontFamily: fonts.agrandirNormal,
	fontSize: 20,
	lineHeight: '26px',

	':hover': {
		borderColor: colors.violet,
	},

	selectors: {
		'&[aria-disabled]': {
			borderColor: colors.grey,
			color: colors.grey,
		},
	},
});

export const sInputError = style({
	selectors: {
		[`${sInput}&`]: {
			borderColor: colors.red,
		},
	},
});

export const sTextField = style({
	font: 'inherit',
	padding: '12px 0',
	border: 'none',
	outline: 'none',
	flexGrow: 1,
	minWidth: 0,

	selectors: {
		[`${sInput}:active &::placeholder`]: {
			color: colors.black,
		},
	},
});

export const sFlag = style({
	paddingInlineEnd: 10,
	borderInlineEnd: `2px solid ${colors.black}`,
	marginInlineEnd: 4,
	height: '1em',
	width: '1.5em',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
});

export const svType = styleVariants({
	text: {},
	phone: {},
});

export const sInvalidInputSign = style({
	marginInlineStart: 4,
	display: `block`,
	flexBasis: 24,
	minWidth: 24,
});
