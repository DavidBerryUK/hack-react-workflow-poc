import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';

export default class MutateSetStatusQueueManualApproval extends ActionBase implements IAction {
	nodeType = EnumNodeType.mutate;

	constructor() {
		const id = nanoid();
		super(id, 'Change Order Status = Queued for manual approval');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success;
	}
}
