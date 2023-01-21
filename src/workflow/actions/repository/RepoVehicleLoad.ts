import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class RepoVehicleLoad extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Load Vehicle');
	}
}
