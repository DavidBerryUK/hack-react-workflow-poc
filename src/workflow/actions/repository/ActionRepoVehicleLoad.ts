import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import ActionExecutionResult from '../../model/ActionExecutionResult';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import EnumIcon from '../../../components/icons/enum/EnumIcon';

export default class ActionRepoVehicleLoad extends ActionBase implements IAction {
	nodeType = EnumNodeType.repositoryRead;
	icon = EnumIcon.Read;
	constructor() {
		const id = nanoid();
		super(id, 'Load Vehicle');
	}

	execute(context: UpdatableContext): ActionExecutionResult {
		return ActionExecutionResult.success;
	}
}