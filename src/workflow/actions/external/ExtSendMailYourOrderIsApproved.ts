import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class ExtSendMailYourOrderIsApproved extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Send Email: Your order is approved');
	}
}
