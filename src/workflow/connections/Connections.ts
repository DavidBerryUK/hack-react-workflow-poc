import Connection from './Connection';

export default class Connections {
	items: Array<Connection>;

	constructor() {
		this.items = new Array<Connection>();
	}

	add(connection: Connection) {
		this.items.push(connection);
	}
}
