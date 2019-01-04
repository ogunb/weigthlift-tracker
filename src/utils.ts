export function dateToDisplay(newDate: string) {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	};
	const date = new Date(newDate);
	return date.toLocaleDateString('tr-TR', options);
}
export function dateToData(newDate: string) {
	const date = new Date(newDate);
	return date.getTime();
}
