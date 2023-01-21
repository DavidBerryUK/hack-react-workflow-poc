import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';

export default class ValidateDoesVehicleHaveRepairContract extends ActionBase implements IAction {
	nodeType = EnumNodeType.validation;

	constructor() {
		const id = nanoid();
		super(id, 'Does vehicle have repair contract?');
	}

	execute(): void {}
}
