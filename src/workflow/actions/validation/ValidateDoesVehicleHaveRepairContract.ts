import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class ValidateDoesVehicleHaveRepairContract extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Does vehicle have repair contract?');
	}
}
