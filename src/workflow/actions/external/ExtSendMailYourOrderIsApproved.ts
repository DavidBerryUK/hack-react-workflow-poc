import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';

export default class ExtSendMailYourOrderIsApproved extends ActionBase implements IAction {
	nodeType = EnumNodeType.email;

	constructor() {
		const id = nanoid();
		super(id, 'Send Email: Your order is approved');
	}

	execute(): void {}
}
