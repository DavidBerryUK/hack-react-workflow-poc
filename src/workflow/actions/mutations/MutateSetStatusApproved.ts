import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';
import EnumNodeType from '../../enums/EnumNodeType';
import IAction from '../interfaces/IAction';

export default class MutateSetStatusApproved extends ActionBase implements IAction {
	nodeType = EnumNodeType.mutate;

	constructor() {
		const id = nanoid();
		super(id, 'Change Order Status = Approved');
	}

	execute(): void {}
}
