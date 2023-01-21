import Rectangle from '../../models/Rectangle';
import IAction from '../../workflow/actions/interfaces/IAction';

export default class LayoutNode {
	action: IAction;
	rectangle: Rectangle;

	constructor(action: IAction, rectangle: Rectangle) {
		this.action = action;
		this.rectangle = rectangle;
	}
}
