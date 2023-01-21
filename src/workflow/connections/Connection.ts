import IAction from '../actions/interfaces/IAction';
import EnumConnectionType from './EnumConnectionType';

export default class Connection {
	type: EnumConnectionType;
	from: IAction;
	to: IAction;

	constructor(from: IAction, to: IAction, type: EnumConnectionType) {
		this.from = from;
		this.to = to;
		this.type = type;
	}
}
