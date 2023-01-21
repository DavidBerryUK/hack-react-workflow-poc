import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class RepoOrderSave extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Save Order');
	}
}
