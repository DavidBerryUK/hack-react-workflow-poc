import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumIcon from '../../../components/icons/enum/EnumIcon';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';

export default class ActionValidateDoesVehicleHaveRepairContract extends ActionBase implements IAction {
	nodeType = EnumNodeType.validation;
	icon = EnumIcon.validation;

	constructor() {
		const id = nanoid();
		super(id, 'Does vehicle have repair contract?');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success();
	}
}
