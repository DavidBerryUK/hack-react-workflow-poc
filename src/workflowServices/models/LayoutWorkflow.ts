import IAction from '../../workflow/actions/interfaces/IAction';
import LayoutNode from './LayoutNode';

export default class LayoutWorkflowModel {
	nodes: Array<LayoutNode>;
	nodesMap: Map<string, LayoutNode>;

	constructor() {
		this.nodes = new Array<LayoutNode>();
		this.nodesMap = new Map<string, LayoutNode>();
	}

	add(node: LayoutNode) {
		if (this.doesContainAction(node.action)) {
			return;
		}
		this.nodesMap.set(node.action.id, node);
		this.nodes.push(node);
	}

	getByAction(action: IAction): LayoutNode | undefined {
		return this.nodesMap.get(action.id);
	}

	remove(node: IAction) {
		if (!this.doesContainAction(node)) {
			return;
		}
		this.nodesMap.delete(node.id);
		this.nodes = this.nodes.filter((item) => item.action.id !== node.id);
	}

	doesContainAction(action: IAction) {
		return this.nodesMap.has(action.id);
	}
}
