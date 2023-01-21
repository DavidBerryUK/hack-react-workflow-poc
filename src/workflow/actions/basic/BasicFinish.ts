import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class BasicFinish extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Finish');
	}
}
