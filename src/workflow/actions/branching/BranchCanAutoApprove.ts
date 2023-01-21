import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class BranchCanAutoApprove extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Can Auto Approve Order?');
	}
}
