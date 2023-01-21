import IAction from '../actions/interfaces/IAction';
import Connection from './Connection';
import EnumConnectionType from './EnumConnectionType';

export default class ConnectionBuilder {
	static FromTo(from: IAction, to: IAction) {
		const connection = new Connection(from, to, EnumConnectionType.default);
		from.connections.add(connection);
		to.connections.add(connection);
	}

	static FromToForPass(from: IAction, to: IAction) {
		const connection = new Connection(from, to, EnumConnectionType.onSuccess);
		from.connections.add(connection);
		to.connections.add(connection);
	}
	static FromToForFail(from: IAction, to: IAction) {
		const connection = new Connection(from, to, EnumConnectionType.onFail);
		from.connections.add(connection);
		to.connections.add(connection);
	}
}
