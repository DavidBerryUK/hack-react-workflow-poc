import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';

export default class BasicFinish extends ActionBase implements IAction {
	nodeType = EnumNodeType.finish;

	constructor() {
		const id = nanoid();
		super(id, 'Finish');
	}

	execute(): void {}
}
