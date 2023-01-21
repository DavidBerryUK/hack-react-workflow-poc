import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class MutateSetStatusQueueManualApproval extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Change Order Status = Queued for manual approval');
	}
}
