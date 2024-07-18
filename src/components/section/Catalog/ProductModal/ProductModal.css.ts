import { globalStyle, style } from '@vanilla-extract/css';

import { sCardStack } from '../../CardStack/CardStack.css';

export const sProductModal = style({
	border: 'none',
	backgroundColor: 'transparent',
	padding: 0,
});

globalStyle(`${sProductModal} ${sCardStack}`, {
	marginBlock: 0,
	marginInline: 0,
	width: '100%',
	zIndex: 0,
});

globalStyle(`${sProductModal} ${sCardStack}::after`, {
	display: 'none',
});

globalStyle(`${sProductModal} ${sCardStack}::before`, {
	display: 'none',
});
