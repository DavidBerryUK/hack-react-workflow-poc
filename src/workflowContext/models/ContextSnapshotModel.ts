import IAction from '../../workflow/actions/interfaces/IAction';
import ContextModel from './ContextModel';
//
// holds a snapshot of the context along with a reference
// to the action that updated it
//
export default class ContextSnapshotModel {
	date: Date;
	data: ContextModel;
	action: IAction;

	constructor(data: ContextModel, action: IAction) {
		this.date = new Date();
		this.data = data;
		this.action = action;
	}
}
