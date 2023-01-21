import Connections from '../../connections/Connections';

export default class ActionBase {
	id: string;
	name: string;
	connections: Connections;

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
		this.connections = new Connections();
	}
}
