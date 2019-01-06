export function dateToDisplay(newDate: number) {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	};
	const date = new Date(newDate);
	return date.toLocaleDateString('tr-TR', options);
}
export function dateToData(newDate: number) {
	const date = new Date(newDate);
	return date.getTime();
}
