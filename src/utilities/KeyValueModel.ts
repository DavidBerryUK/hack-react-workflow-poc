export default class KeyValueModel {
	key: string;

	value: string;

	constructor(id: string, text: string) {
		this.key = id;
		this.value = text;
	}
}
