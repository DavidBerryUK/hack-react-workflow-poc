import { nanoid } from 'nanoid';

import EnumIcon from '../../../components/icons/enum/EnumIcon';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumNodeType from '../../enums/EnumNodeType';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import ActionBase from '../base/ActionBase';
import IAction from '../interfaces/IAction';

export default class ActionValidateIsOrderInDraftState extends ActionBase implements IAction {
	nodeType = EnumNodeType.validation;

	icon = EnumIcon.validation;

	constructor() {
		const id = nanoid();
		super(id, 'Is order in draft state?');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success();
	}
}
