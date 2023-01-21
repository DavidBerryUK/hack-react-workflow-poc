import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class ExtSendMailQueuedForApproval extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Send Email: Your order queued for manual approved');
	}
}
