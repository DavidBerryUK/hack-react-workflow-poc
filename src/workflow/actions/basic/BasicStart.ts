import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';

export default class BasicStart extends ActionBase implements IAction {
	nodeType = EnumNodeType.start;

	constructor() {
		const id = nanoid();
		super(id, 'Start');
	}

	execute(): void {}
}
