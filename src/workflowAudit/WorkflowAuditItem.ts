import IAction from '../workflow/actions/interfaces/IAction';
import ActionExecutionResult from '../workflow/model/ActionExecutionResult';

export default class WorkflowAuditItem {
	action: IAction;
	transactionId: string;
	startDate: Date;
	finishDate: Date | undefined;
	result: ActionExecutionResult | undefined;

	constructor(action: IAction, transactionId: string) {
		this.action = action;
		this.transactionId = transactionId;
		this.startDate = new Date();
	}

	complete(result: ActionExecutionResult) {
		this.result = result;
		this.finishDate = new Date();
	}
}
