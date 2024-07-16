/**
 * Font siZe - defines size of font and line height in one line.
 * @param size Value for fontSize prop
 * @param lineHeightPx value for lineHeight prop in px units

 * @example
 * ```ts
 * import { style } from '@vanilla-extract/css';
 * import { fz } from '@/styles/bundle.css';
 *
 * export const sTitle = style({
 * 	fontFamily: fonts.agrandirGrand,
 * 	...fz(30, 36),
 *
 * 	'@media': {
 * 		[calc.width('<=', 'smartphone')]: {
 * 			...fz(20, 24),
 * 		},
 * 	},
 * });
 * ```
 */
export function fz(size: number, lineHeightPx: number) {
	return {
		fontSize: size,
		lineHeight: `${lineHeightPx}px`,
	};
}
