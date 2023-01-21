import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class ValidateIsGarageUser extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Is a garage user?');
	}
}
