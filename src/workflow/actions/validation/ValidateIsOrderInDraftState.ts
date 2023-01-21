import { nanoid } from 'nanoid';
import ActionBase from '../base/ActionBase';

export default class ValidateIsOrderInDraftState extends ActionBase {
	constructor() {
		const id = nanoid();
		super(id, 'Is order in draft state?');
	}
}
