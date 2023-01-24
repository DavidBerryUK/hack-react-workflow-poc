/* eslint-disable import/no-cycle */
import { nanoid } from 'nanoid';

import IAction from '../actions/interfaces/IAction';
import ActionExecutionResult from './ActionExecutionResult';

export default class WorkflowAuditItem {
	id: string;

	step: number;

	action: IAction;

	transactionId: string;

	startTime: number;

	finishTime: number | undefined;

	duration: number | undefined;

	result: ActionExecutionResult | undefined;

	constructor(action: IAction, transactionId: string) {
		this.id = nanoid();
		this.step = 0;
		this.action = action;
		this.transactionId = transactionId;
		this.startTime = performance.now();
	}

	complete(result: ActionExecutionResult) {
		this.result = result;
		this.finishTime = performance.now();
		this.duration = this.finishTime - this.startTime;
	}
}
