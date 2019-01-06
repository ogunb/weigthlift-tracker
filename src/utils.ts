export function dateToDisplay(newDate: string): string {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	};
	const date = new Date(newDate);
	return date.toLocaleDateString('tr-TR', options);
}

export function closestDate(dates: []): string {
	const sortedDates = dates.sort();
	return sortedDates[sortedDates.length - 1];
}
