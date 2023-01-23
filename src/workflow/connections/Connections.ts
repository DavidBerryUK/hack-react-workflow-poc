import IAction from '../actions/interfaces/IAction';
import Connection from './Connection';
import EnumConnectionType from './EnumConnectionType';

export default class Connections {
	items: Array<Connection>;

	constructor() {
		this.items = new Array<Connection>();
	}

	add(connection: Connection) {
		this.items.push(connection);
	}

	getSuccessConnectionFrom(node: IAction): Connection | undefined {
		const nodes = this.items.filter((item) => item.from.id === node.id && item.type === EnumConnectionType.onNo);
		return nodes.length === 0 ? undefined : nodes[0];
	}

	getNoConnectionFrom(node: IAction): Connection | undefined {
		const nodes = this.items.filter((item) => item.from.id === node.id && item.type === EnumConnectionType.onNo);
		return nodes.length === 0 ? undefined : nodes[0];
	}

	getDefaultConnectionFrom(node: IAction): Connection | undefined {
		const nodes = this.items.filter((item) => item.from.id === node.id && item.type === EnumConnectionType.default);
		return nodes.length === 0 ? undefined : nodes[0];
	}

	getYesOrDefaultConnectionFrom(node: IAction): Connection | undefined {
		const successNode = this.getSuccessConnectionFrom(node);
		if (successNode !== undefined) {
			return successNode;
		}
		return this.getDefaultConnectionFrom(node);
	}
}
