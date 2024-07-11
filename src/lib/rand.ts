export function randInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randUniqIntList(length: number, min: number, max: number): number[] {
	const list: number[] = [];

	for (let i = 0; i < length; i++) {
		let isNumberInResult: boolean;
		let number: number;

		do {
			number = randInt(min, max);
			isNumberInResult = list.findIndex((item) => item === number) > -1;
		} while (isNumberInResult);

		list.push(number);
	}

	return list;
}
