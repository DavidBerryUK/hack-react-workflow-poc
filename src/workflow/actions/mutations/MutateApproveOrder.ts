import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class MutateApproveOrder extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Approve Order');
	}
}
