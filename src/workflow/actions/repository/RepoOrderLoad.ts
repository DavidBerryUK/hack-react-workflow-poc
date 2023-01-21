import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class RepoOrderLoad extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Load Order');
	}
}
