import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumIcon from '../../../components/icons/enum/EnumIcon';

export default class ActionValidateIsOrderInDraftState extends ActionBase implements IAction {
	nodeType = EnumNodeType.validation;
	icon = EnumIcon.validation;

	constructor() {
		const id = nanoid();
		super(id, 'Is order in draft state?');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success();
	}
}
