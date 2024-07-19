import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/styles/bundle.css';

export const sButton = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: fonts.agrandirNarrow,
	fontWeight: 700,
	fontSize: 20,
	lineHeight: '20px',
	border: `2px solid ${colors.black}`,
	borderRadius: 100,
	cursor: 'pointer',
	gap: 20,

	':disabled': {
		background: colors.white,
	},

	selectors: {
		'&:not(:disabled):not(:active):hover': {
			boxShadow: `4px 4px 0 ${colors.black}`,
		},
		'&:not(:disabled):active': {
			background: colors.black,
			color: colors.white,
		},
	},
});

export const sArrow = style({
	padding: 6,
	background: colors.black,
	borderRadius: 100,
	width: 24,
	height: 24,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	transform: `rotate(45deg)`,

	selectors: {
		[`${sButton}:hover &`]: {
			transform: `rotate(0deg)`,
		},
		[`${sButton}:active &`]: {
			background: colors.white,
			transform: `rotate(45deg)`,
		},
		[`${sButton}:active:disabled &`]: {
			background: colors.black,
		},
	},
});

export const sArrowSvg = style({
	selectors: {
		[`${sButton}:active:not(:disabled) &`]: {
			fill: colors.black,
		},
	},
});

export const svShape = styleVariants({
	wide: {
		padding: '15px 30px',
	},
	iconic: {
		padding: 12,
	},
});

globalStyle(`${svShape.iconic} svg`, {
	display: 'block',
});

globalStyle(`${svShape.iconic}:active:not(:disabled) svg`, {
	fill: colors.white,
});

export const svTheme = styleVariants({
	pink: {
		background: colors.pink,
		color: colors.black,
	},
	white: {
		background: colors.white,
		color: colors.black,

		selectors: {
			'&:not(:disabled):not(:active):hover': {
				background: colors.pink,
			},
		},
	},
	black: {
		background: colors.black,
		color: colors.white,
		borderColor: colors.white,

		selectors: {
			'&:hover': {
				borderColor: colors.pink,
			},
			'&:not(:disabled):not(:active):hover': {
				background: colors.pink,
			},
		},
	},
});

globalStyle(`${svTheme.black}:not(:disabled) svg`, {
	fill: colors.white,
});

globalStyle(`${svTheme.black}:hover:not(:disabled) svg`, {
	fill: colors.black,
});
