import { globalStyle, style } from '@vanilla-extract/css';

import { sButton } from '@/components/common/Button/Button.css';
import { colors, fonts } from '@/styles/bundle.css';

export const sCardStack = style({
	position: 'relative',
	zIndex: 1,

	marginBlockStart: 120,
	marginBlockEnd: 100,

	fontFamily: fonts.agrandirNormal,
	fontSize: 20,
	lineHeight: '26px',

	':before': {
		content: '',
		position: 'absolute',
		width: 'calc(100% - 40px * 2)',
		top: -20,
		left: 40,
		backgroundColor: colors.pink,
		border: `2px solid ${colors.black}`,
		height: 200,
		borderRadius: 80,
	},
	':after': {
		content: '',
		position: 'absolute',
		width: 'calc(100% - 20px * 2)',
		top: -10,
		left: 20,
		backgroundColor: colors.violet,
		border: `2px solid ${colors.black}`,
		height: 200,
		borderRadius: 80,
	},
});

export const sBg = style({
	position: 'relative',
	backgroundColor: colors.yellow,
	padding: '120px 60px',
	borderRadius: 80,
	border: `2px solid ${colors.black}`,
	zIndex: 1,

	display: 'flex',
	flexDirection: 'row',
	gap: 60,
});

export const sContent = style({});

export const sCategory = style({});

export const sTitle = style({
	marginBlockStart: 10,
	fontFamily: fonts.agrandirGrand,
	fontSize: 48,
	lineHeight: '57px',
	textTransform: `uppercase`,
	fontWeight: 800,
});

export const sSubtitle = style({
	marginBlockStart: 10,
	fontFamily: fonts.agrandirGrand,
	fontSize: 30,
	lineHeight: '36px',
	textTransform: `uppercase`,
	fontWeight: 800,
});

export const sDescription = style({
	marginBlockStart: 20,
});

export const sOptions = style({
	marginBlockStart: 30,
	display: 'flex',
	flexDirection: 'row',
	gap: 10,
});

export const sOption = style({});

globalStyle(`${sOption} ${sButton}`, {
	padding: '9px 16px',
	backgroundColor: 'transparent',
	fontFamily: fonts.agrandirText,
	fontWeight: 500,
});

export const sOptionSelected = style({});

globalStyle(`${sOptionSelected} ${sButton}`, {
	backgroundColor: colors.white,
	borderColor: colors.white,
});

export const sFooter = style({
	marginBlockStart: 20,
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
	alignItems: 'center',
});

export const sPrice = style({
	fontFamily: fonts.agrandirGrand,
	fontSize: 30,
	lineHeight: '36px',
	fontWeight: 800,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'flex-start',
});

globalStyle(`${sPrice} sup`, {
	fontSize: 20,
	lineHeight: '24px',
	marginInlineEnd: 6,
});

export const sPresentation = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 60,
});

export const sImage = style({
	position: 'relative',
	width: 240,
	height: 453,
	minWidth: 240,
});

export const sMetaData = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 40,
});

export const sSlogan = style({
	fontFamily: fonts.agrandirGrand,
	fontWeight: 800,
	fontSize: 30,
	lineHeight: '36px',
	textTransform: `uppercase`,
});

export const sFeatures = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
});

export const sFeat = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
});

export const sFeatValue = style({
	fontWeight: 700,
	fontSize: 20,
	lineHeight: '20px',
});

export const sFeatName = style({
	fontSize: 14,
	lineHeight: '14px',
});

export const sBtnShop = style({
	padding: 1,
});
