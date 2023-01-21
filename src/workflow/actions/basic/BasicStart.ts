import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class BasicStart extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Start');
	}
}
