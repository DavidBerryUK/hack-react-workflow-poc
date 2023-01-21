import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';

export default class BranchCanAutoApprove extends ActionBase implements IAction {
	nodeType = EnumNodeType.branching;

	constructor() {
		const id = nanoid();
		super(id, 'Can Auto Approve Order?');
	}

	execute(): void {}
}
