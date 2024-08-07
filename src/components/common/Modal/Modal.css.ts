import { globalStyle, style } from '@vanilla-extract/css';

import { calc, colors } from '@/styles/bundle.css';
import { sButton } from '../Button/Button.css';

export const sModal = style({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxHeight: `calc(100% - 65px * 2)`,
});

export const sScrollable = style({
	paddingBlockEnd: 150,
	pointerEvents: 'none',
});

export const sContent = style({
	backgroundColor: colors.yellow,
	border: `2px solid ${colors.black}`,
	color: colors.black,
	borderRadius: 80,
	padding: '120px 60px',
	pointerEvents: 'all',

	'@media': {
		[calc.width('<=', 'laptop')]: {
			padding: '120px 40px',
		},
		[calc.width('<=', 'smartphone')]: {
			padding: '80px 40px',
			borderRadius: 40,
		},
	},
});

export const sOverlay = style({
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: '#FFFFFF99',
	overflow: 'auto',
	zIndex: 5000,
});

export const sCross = style({
	position: 'absolute',
	right: 0,
	top: 0,
});

globalStyle(`${sCross} ${sButton}`, {
	width: 46,
	height: 46,
});
