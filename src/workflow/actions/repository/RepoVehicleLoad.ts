import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';

export default class RepoVehicleLoad extends ActionBase implements IAction {
	nodeType = EnumNodeType.repositoryRead;

	constructor() {
		const id = nanoid();
		super(id, 'Load Vehicle');
	}

	execute(): void {}
}
