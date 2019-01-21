export function dateToDisplay(newDate: string): string {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	};
	const date = new Date(newDate);
	return date.toLocaleDateString('en-GB', options);
}
