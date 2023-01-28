import { nanoid } from 'nanoid';

import EnumIcon from '../../../components/ui/icons/enum/EnumIcon';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumNodeType from '../../enums/EnumNodeType';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import ActionBase from '../base/ActionBase';
import IAction from '../interfaces/IAction';

export default class ActionExtSendMailQueuedForApproval extends ActionBase implements IAction {
	nodeType = EnumNodeType.email;

	icon = EnumIcon.email;

	constructor() {
		const id = nanoid();
		super(id, 'Send Email: Your order queued for manual approved');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success();
	}
}
