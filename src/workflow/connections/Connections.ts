/* eslint-disable import/no-cycle */
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

	getSuccessOrDefaultFrom(node: IAction): Connection | undefined {
		return this.getTypeOrDefaultFrom(node, EnumConnectionType.onSuccess);
	}

	getFailOrDefaultFrom(node: IAction): Connection | undefined {
		return this.getTypeOrDefaultFrom(node, EnumConnectionType.onFail);
	}

	getYesOrDefaultFrom(node: IAction): Connection | undefined {
		return this.getTypeOrDefaultFrom(node, EnumConnectionType.onYes);
	}

	getNoOrDefaultFrom(node: IAction): Connection | undefined {
		return this.getTypeOrDefaultFrom(node, EnumConnectionType.onNo);
	}

	getDefaultFrom(node: IAction): Connection | undefined {
		const nodes = this.items.filter(({ from, type }) => from === node && type === EnumConnectionType.default);
		return nodes.length === 0 ? undefined : nodes[0];
	}

	getTypeOrDefaultFrom(node: IAction, connectionType: EnumConnectionType): Connection | undefined {
		const nextConnection = node.connections.items.find(({ type, from }) => type === connectionType && from === node);
		return nextConnection ?? this.getDefaultFrom(node);
	}
}
