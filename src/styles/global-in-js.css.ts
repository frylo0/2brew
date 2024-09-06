import { globalStyle } from '@vanilla-extract/css';

import { colors, fonts } from './bundle.css';

globalStyle('html', {
	fontSize: '12px',
	background: '#333',
	color: colors.black,
	fontFamily: fonts.agrandirGrand,
	fontWeight: 'normal',
	scrollBehavior: 'smooth',
});

globalStyle('*', {
	boxSizing: 'border-box',
});

globalStyle('[id]', {
	scrollMarginBlockStart: 50,
});

globalStyle('a', {
	color: 'inherit',
	textDecoration: 'none',
});
