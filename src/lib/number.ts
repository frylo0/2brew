export function destructFloat(number: number, digitsCount: number = 2): { int: string; fract: string } {
	const int = Math.trunc(number).toString();

	const fract = number
		.toLocaleString('en-US', { minimumFractionDigits: digitsCount, maximumFractionDigits: digitsCount })
		.split('.')[1];

	return { int, fract };
}
