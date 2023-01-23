import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumIcon from '../../../components/icons/enum/EnumIcon';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';

export default class ActionFinish extends ActionBase implements IAction {
	nodeType = EnumNodeType.finish;
	icon = EnumIcon.stop;

	constructor() {
		const id = nanoid();
		super(id, 'Finish');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success();
	}
}
