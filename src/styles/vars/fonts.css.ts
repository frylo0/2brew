import { fontFace } from '@vanilla-extract/css';

const agrandirGrand = fontFace([
	{
		src: 'url(/fonts/agrandir/PPAgrandirGrand-Variable.ttf) format(truetype)',
		fontDisplay: 'swap',
	},
]);

const agrandirNarrow = fontFace([
	{
		src: 'url(/fonts/agrandir/PPAgrandirNarrow-Variable.ttf) format(truetype)',
		fontDisplay: 'swap',
	},
]);

const agrandirNormal = fontFace([
	{
		src: 'url(/fonts/agrandir/PPAgrandirNormal-Variable.ttf) format(truetype)',
		fontDisplay: 'swap',
	},
]);

const agrandirText = fontFace([
	{
		src: 'url(/fonts/agrandir/PPAgrandirText-Variable.ttf) format(truetype)',
		fontDisplay: 'swap',
	},
]);

const agrandirTight = fontFace([
	{
		src: 'url(/fonts/agrandir/PPAgrandirTight-Variable.ttf) format(truetype)',
		fontDisplay: 'swap',
	},
]);

const agrandirWide = fontFace([
	{
		src: 'url(/fonts/agrandir/PPAgrandirWide-Variable.ttf) format(truetype)',
		fontDisplay: 'swap',
	},
]);

export const fonts = {
	agrandirGrand,
	agrandirNarrow,
	agrandirNormal,
	agrandirText,
	agrandirTight,
	agrandirWide,
};
