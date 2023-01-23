import IAction from '../actions/interfaces/IAction';
import Connection from './Connection';
import EnumConnectionType from './EnumConnectionType';

export default class ConnectionBuilder {
	static flowFromTo(from: IAction, to: IAction) {
		console.log(`from:${from.name} to ${to.name}`);

		const connection = new Connection(from, to, EnumConnectionType.default);
		from.connections.add(connection);
		to.connections.add(connection);
	}

	static flowFromToWithConnectionType(from: IAction, to: IAction, connectionType: EnumConnectionType) {
		console.log(`from:${from.name} to ${to.name}`);

		const connection = new Connection(from, to, connectionType);
		from.connections.add(connection);
		to.connections.add(connection);
	}


	static addSequenceFlowForResultType(target: IAction, sequence: Array<IAction>, resultType: EnumConnectionType) {
		let lastNode = target;
		let conntectionType = resultType;
		sequence.forEach((action) => {
			this.flowFromToWithConnectionType(lastNode, action, conntectionType);
			lastNode = action;
			if ( conntectionType !== EnumConnectionType.default) {
				conntectionType = EnumConnectionType.default;
			}
		});
	}

	static addSequenceFlow(target: IAction, sequence: Array<IAction>) {
		this.addSequenceFlowForResultType(target,sequence, EnumConnectionType.default);
	}
}
