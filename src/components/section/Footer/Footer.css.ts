import { globalStyle, style } from '@vanilla-extract/css';

import { sButton } from '@/components/common/Button/Button.css';
import { colors, font, fonts } from '@/styles/bundle.css';

export const sFooter = style({
	color: colors.white,
	backgroundColor: colors.black,
	paddingBlock: '100px calc(120px + 64px)',
});

export const sContent = style({});

export const sGrid = style({
	display: 'grid',
	gridTemplateRows: `auto auto`,
	gridTemplateColumns: `auto 300px`,
	gridTemplateAreas: `
		"meta   img"
		"social img"`,
	gap: '30px 64px',
});

export const sTitle = style({
	...font(fonts.agrandirGrand, 800, 48, 57),
	textTransform: `uppercase`,
	marginBlockEnd: 60,
});

export const sMetaData = style({
	display: 'flex',
	flexDirection: 'row',
	gap: '30px 60px',
	flexWrap: `wrap`,
	gridArea: 'meta',
});

export const sSocial = style({
	gridArea: 'social',
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
});

globalStyle(`${sSocial} ${sButton}`, {
	padding: 0,
});

export const sFigure = style({
	gridArea: 'img',
	position: 'relative',
	width: 300,
	height: 215,
	borderRadius: 20,
	overflow: 'hidden',
});

export const sItem = style({
	...font(fonts.agrandirNormal, 300, 20, 26),
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
	whiteSpace: 'nowrap',
});

globalStyle(`${sItem} strong`, {
	fontWeight: 700,
});
