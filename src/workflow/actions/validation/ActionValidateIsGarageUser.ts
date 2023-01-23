import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumIcon from '../../../components/icons/enum/EnumIcon';
import EnumNodeType from '../../enums/EnumNodeType';
import EnumUserType from '../../../workflowContext/enums/EnumUserType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';

export default class ActionValidateIsGarageUser extends ActionBase implements IAction {
	nodeType = EnumNodeType.validation;
	icon = EnumIcon.validation;

	constructor() {
		const id = nanoid();
		super(id, 'Is a garage user?');
	}

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
