import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumIcon from '../../../components/icons/enum/EnumIcon';

export default class ActionMutateSetStatusApproved extends ActionBase implements IAction {
	nodeType = EnumNodeType.mutate;
	icon = EnumIcon.mutate;

	constructor() {
		const id = nanoid();
		super(id, 'Change Order Status = Approved');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success;
	}
}
