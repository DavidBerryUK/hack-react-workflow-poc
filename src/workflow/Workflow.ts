import IAction from './actions/interfaces/IAction';
import EnumNodeType from './enums/EnumNodeType';

export default class Workflow {
	startNode: IAction;

	nodes: Array<IAction>;

	constructor(nodes: Array<IAction>) {
		this.nodes = nodes;

		//
		// find the start node
		//
		const startNodes = this.nodes.filter((node) => node.nodeType === EnumNodeType.start);
		if (startNodes.length === 0) {
			throw new Error('A Start Node must be included');
		}
		if (startNodes.length > 1) {
			throw new Error('More that 1 Start nodes exist in workflow');
		}

		// eslint-disable-next-line prefer-destructuring
		this.startNode = startNodes[0];
	}
}
