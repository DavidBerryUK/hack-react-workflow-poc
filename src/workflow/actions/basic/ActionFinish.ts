import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumIcon from '../../../components/icons/enum/EnumIcon';

export default class ActionFinish extends ActionBase implements IAction {
	nodeType = EnumNodeType.finish;
	icon = EnumIcon.stop;

	constructor() {
		const id = nanoid();
		super(id, 'Finish');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success;
	}
}
