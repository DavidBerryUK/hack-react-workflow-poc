/* eslint-disable import/no-cycle */
import IAction from '../../workflow/actions/interfaces/IAction';
import ContextModel from './ContextModel';
//
// holds a snapshot of the context along with a reference
// to the action that updated it
//
export default class ContextSnapshotModel {
	transactionId: string;

	data: ContextModel;

	action: IAction;

	constructor(data: ContextModel, action: IAction, transactionId: string) {
		this.transactionId = transactionId;
		this.data = data;
		this.action = action;
	}
}
