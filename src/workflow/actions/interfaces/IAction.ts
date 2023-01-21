import Connections from '../../connections/Connections';
import EnumNodeType from '../../enums/EnumNodeType';

export default interface IAction {
	nodeType: EnumNodeType;
	connections: Connections;
	id: string;
	name: string;
	execute(): void;
}
