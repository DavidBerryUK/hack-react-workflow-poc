import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumIcon from '../../../components/icons/enum/EnumIcon';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';

export default class ActionMutateSetStatusQueueManualApproval extends ActionBase implements IAction {
	nodeType = EnumNodeType.mutate;
	icon = EnumIcon.mutate;

	constructor() {
		const id = nanoid();
		super(id, 'Change Order Status = Queued for manual approval');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success();
	}
}
