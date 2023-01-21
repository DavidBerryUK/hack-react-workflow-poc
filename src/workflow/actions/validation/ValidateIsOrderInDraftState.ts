import { nanoid } from 'nanoid';
import EnumNodeType from '../../enums/EnumNodeType';
import ActionBase from '../base/ActionBase';
import IAction from '../interfaces/IAction';

export default class ValidateIsOrderInDraftState extends ActionBase implements IAction {
	nodeType = EnumNodeType.validation;

	constructor() {
		const id = nanoid();
		super(id, 'Is order in draft state?');
	}

	execute(): void {
		throw new Error('Method not implemented.');
	}
}
