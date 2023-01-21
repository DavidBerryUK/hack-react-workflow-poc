import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class MutateSetStatusApproved extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Change Order Status = Approved');
	}
}
