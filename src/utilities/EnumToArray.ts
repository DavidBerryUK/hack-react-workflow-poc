import KeyValue from './KeyValueModel';

export default class EnumToArray {
	// eslint-disable-next-line class-methods-use-this
	static createListArray(enumType: any): Array<KeyValue> {
		const listArray = [];
		const keys = Object.keys(enumType);
		for (let i = 0; i < keys.length; i += 1) {
			const key = Number(keys[i]);
			if (!Number.isNaN(key)) {
				listArray.push(new KeyValue(`${key}`, enumType[key]));
			}
		}
		return listArray;
	}
}
