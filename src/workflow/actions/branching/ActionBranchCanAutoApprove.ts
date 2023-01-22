import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumIcon from '../../../components/icons/enum/EnumIcon';

export default class ActionBranchCanAutoApprove extends ActionBase implements IAction {
	nodeType = EnumNodeType.branching;
	icon = EnumIcon.branch;

	constructor() {
		const id = nanoid();
		super(id, 'Can Auto Approve Order?');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success;
	}
}
