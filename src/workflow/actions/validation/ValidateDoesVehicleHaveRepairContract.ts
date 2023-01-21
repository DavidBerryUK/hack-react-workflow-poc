import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';

export default class ValidateDoesVehicleHaveRepairContract extends ActionBase implements IAction {
	nodeType = EnumNodeType.validation;

	constructor() {
		const id = nanoid();
		super(id, 'Does vehicle have repair contract?');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success;
	}
}
