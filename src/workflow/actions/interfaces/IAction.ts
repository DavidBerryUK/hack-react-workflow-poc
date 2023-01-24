/* eslint-disable import/no-cycle */
import EnumIcon from '../../../components/icons/enum/EnumIcon';
import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import Connections from '../../connections/Connections';
import EnumNodeType from '../../enums/EnumNodeType';
import ActionExecutionResult from '../../model/ActionExecutionResult';

export default interface IAction {
	nodeType: EnumNodeType;
	connections: Connections;
	id: string;
	name: string;
	icon: EnumIcon;
	execute(context: UpdatableContext): ActionExecutionResult;
}
