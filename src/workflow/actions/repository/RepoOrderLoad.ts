import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';

export default class RepoOrderLoad extends ActionBase implements IAction {
	nodeType = EnumNodeType.repositoryRead;

	constructor() {
		const id = nanoid();
		super(id, 'Load Order');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success;
	}
}
