import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumIcon from '../../../components/icons/enum/EnumIcon';

export default class ActionExtSendMailYourOrderIsApproved extends ActionBase implements IAction {
	nodeType = EnumNodeType.email;
	icon = EnumIcon.email;

	constructor() {
		const id = nanoid();
		super(id, 'Send Email: Your order is approved');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success;
	}
}
