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
		const nodes = this.items.filter((item) => item.from.id === node.id && item.type === EnumConnectionType.onSuccess);
		return nodes.length === 0 ? undefined : nodes[0];
	}

	getFailureConnectionFrom(node: IAction): Connection | undefined {
		const nodes = this.items.filter((item) => item.from.id === node.id && item.type === EnumConnectionType.onFail);
		return nodes.length === 0 ? undefined : nodes[0];
	}

	getDefaultConnectionFrom(node: IAction): Connection | undefined {
		const nodes = this.items.filter((item) => item.from.id === node.id && item.type === EnumConnectionType.default);
		return nodes.length === 0 ? undefined : nodes[0];
	}

	getSuccessOrDefaultConnectionFrom(node: IAction): Connection | undefined {
		const successNode = this.getSuccessConnectionFrom(node);
		if (successNode !== undefined) {
			return successNode;
		}
		return this.getDefaultConnectionFrom(node);
	}
}
