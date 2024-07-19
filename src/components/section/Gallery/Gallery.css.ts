import { style } from '@vanilla-extract/css';

import { calc, font, fonts, fz } from '@/styles/bundle.css';

export const sGallery = style({
	marginBlock: '100px 120px',

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			marginBlock: '60px 80px',
		},
	},
});

export const sTitle = style({
	...font(fonts.agrandirGrand, 800, 48, 57),
	textTransform: `uppercase`,
	textAlign: 'center',
	marginBlockEnd: 60,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			...fz(30, 36),
			marginBlockEnd: 40,
		},
		[calc.width('<=', 'phone')]: {
			...fz(20, 24),
		},
	},
});

export const sSlide = style({
	position: 'relative',
	overflow: 'hidden',
	width: 300,
	height: 560,
	marginInlineEnd: 30,
	borderRadius: 20,

	'@media': {
		[calc.width('<=', 'smartphone')]: {
			width: 215,
			height: 400,
			marginInlineEnd: 10,
		},
	},
});
