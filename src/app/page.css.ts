import { style } from '@vanilla-extract/css';

import PNG_PageBG from '@/assets/raster/page-bg.png';

export const sMain = style({
	background: `url(${PNG_PageBG.src})`,
	minHeight: '100vh',
});
