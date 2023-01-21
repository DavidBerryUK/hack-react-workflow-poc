import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';

export default class RepoOrderSave extends ActionBase implements IAction {
	nodeType = EnumNodeType.repositoryUpdate;

	constructor() {
		const id = nanoid();
		super(id, 'Save Order');
	}

	execute(): void {}
}
