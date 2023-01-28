import { nanoid } from 'nanoid';

import EnumIcon from '../../../components/ui/icons/enum/EnumIcon';
import EnumUserType from '../../../workflowContext/enums/EnumUserType';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumNodeType from '../../enums/EnumNodeType';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import ActionBase from '../base/ActionBase';
import IAction from '../interfaces/IAction';

export default class ActionValidateIsGarageUser extends ActionBase implements IAction {
	nodeType = EnumNodeType.validation;

	icon = EnumIcon.validation;

	constructor() {
		const id = nanoid();
		super(id, 'Is a garage user?');
	}

	// eslint-disable-next-line class-methods-use-this
	execute(context: UpdatableContext): ActionExecutionResult {
		if (context.data.user === undefined || context.data.user === null) {
			return ActionExecutionResult.fail('No user specified');
		}

		if (context.data.user.userType === EnumUserType.garage) {
			return ActionExecutionResult.success();
		}

		return ActionExecutionResult.fail('User type is not garage');
	}
}
