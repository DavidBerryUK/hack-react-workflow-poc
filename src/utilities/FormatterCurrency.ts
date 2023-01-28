export default class FormatterCurrency {
	static format(value: number) {
		return value.toLocaleString('en-UK', {
			style: 'currency',
			currency: 'GBP',
		});
	}
}
