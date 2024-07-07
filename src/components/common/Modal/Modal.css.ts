import { globalStyle, style } from '@vanilla-extract/css';

import { colors } from '@/styles/bundle.css';
import { sButton } from '../Button/Button.css';

const modalPaddingInline = 255;
const modalPaddingBlock = 150;

export const sModal = style({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: `calc(100% - ${modalPaddingInline}px * 2)`,
	maxHeight: `calc(100% - ${modalPaddingBlock}px * 2)`,
});

export const sScrollable = style({
	paddingBlockEnd: modalPaddingBlock,
});

export const sContent = style({
	backgroundColor: colors.yellow,
	border: `2px solid ${colors.black}`,
	color: colors.black,
	borderRadius: 80,
	padding: '120px 60px',
});

export const sOverlay = style({
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: '#FFFFFF99',
	overflow: 'auto',
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
