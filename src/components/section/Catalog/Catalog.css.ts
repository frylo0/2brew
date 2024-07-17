import { style } from '@vanilla-extract/css';

import { fonts, fz } from '@/styles/bundle.css';

export const sCatalog = style({
	marginBlock: 100,
});

export const sTitle = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	...fz(48, 57),
	textTransform: `uppercase`,
	marginBlockEnd: 60,
});

export const sGrid = style({
	display: 'grid',
	gridTemplateRows: `auto`,
	gridTemplateColumns: `repeat(4, 1fr)`,
	gap: 30,
});
