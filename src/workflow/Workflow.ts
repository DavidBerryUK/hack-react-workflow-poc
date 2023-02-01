import IAction from './actions/interfaces/IAction';
import EnumNodeType from './enums/EnumNodeType';

export default class Workflow {
	startNode: IAction | undefined;

	nodes: Array<IAction>;

	constructor(nodes: Array<IAction>) {
		this.nodes = nodes;
		this.startNode = undefined;
		//
		// find the start node
		//
		const startNodes = this.nodes.filter((node) => node.nodeType === EnumNodeType.start);
		if (startNodes.length === 0) {
			// eslint-disable-next-line no-console
			console.error('A Start Node must be included');
			return;
		}
		if (startNodes.length > 1) {
			// eslint-disable-next-line no-console
			console.error('More that 1 Start nodes exist in workflow');
			return;
		}

		// eslint-disable-next-line prefer-destructuring
		this.startNode = startNodes[0];
	}
}
