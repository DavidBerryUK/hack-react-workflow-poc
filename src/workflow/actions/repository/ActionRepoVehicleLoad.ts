import { nanoid } from 'nanoid';

import EnumIcon from '../../../components/ui/icons/enum/EnumIcon';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumNodeType from '../../enums/EnumNodeType';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import ActionBase from '../base/ActionBase';
import IAction from '../interfaces/IAction';

export default class ActionRepoVehicleLoad extends ActionBase implements IAction {
	nodeType = EnumNodeType.repositoryRead;

	icon = EnumIcon.Read;

	constructor() {
		const id = nanoid();
		super(id, 'Load Vehicle');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success();
	}
}
