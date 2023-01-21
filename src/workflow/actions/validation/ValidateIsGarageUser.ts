import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';

export default class ValidateIsGarageUser extends ActionBase implements IAction {
	nodeType = EnumNodeType.validation;
	constructor() {
		const id = nanoid();
		super(id, 'Is a garage user?');
	}

	execute(): void {}
}
