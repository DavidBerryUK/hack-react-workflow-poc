import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';

export default class BasicFinish extends ActionBase implements IAction {
	nodeType = EnumNodeType.finish;

	constructor() {
		const id = nanoid();
		super(id, 'Finish');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success;
	}
}
