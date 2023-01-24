// This is a JavaScript function called "useWorkflowLayoutEngine" that exports a hook to layout nodes for a user interface.
// The hook has a layout function that takes a "Workflow" object as an argument and returns a "LayoutWorkflowModel" object.
// The layout function uses a crude layout engine to create a flowchart from a node hierarchy by traversing through the connections
// of the "Workflow" object's start node and creating "LayoutNode" objects for each node in the hierarchy.
// The layout engine positions the nodes based on the type of connection (default, onFail, onSuccess) and the width and height of the nodes.
// The function also includes a parseNodes function which is called recursively to traverse through the connections of the "Workflow" object.

import Origin from '../models/geometry/Origin';
import Rectangle from '../models/geometry/Rectangle';
import Size from '../models/geometry/Size';
import IAction from '../workflow/actions/interfaces/IAction';
import EnumConnectionType from '../workflow/connections/EnumConnectionType';
import Workflow from '../workflow/Workflow';
import LayoutNode from './models/LayoutNode';
import LayoutWorkflowModel from './models/LayoutWorkflow';
//
// create a hook to layout nodes for UI
//
const useWorkflowLayoutEngine = () => {
	const nodeWidth = 200;
	const nodeHeight = 80;
	const nodeSpacingX = 80;
	const nodeSpacingY = 30;

	const layout = (workflow: Workflow): LayoutWorkflowModel => {
		const current = workflow.startNode;
		const layoutWorkflow = new LayoutWorkflowModel();

		parseNodes(layoutWorkflow, current, new Origin(nodeWidth + nodeSpacingX * 1.2, 0));

		return layoutWorkflow;
	};

	//
	// crude layout engine to create flowchart from node hierarchy
	//
	const parseNodes = (layoutWorkflow: LayoutWorkflowModel, action: IAction, origin: Origin) => {
		// does new node exist in workflow?
		let layoutNode = layoutWorkflow.getByAction(action);

		if (layoutNode === undefined) {
			layoutNode = new LayoutNode(action, new Rectangle(origin, new Size(nodeWidth, nodeHeight)));
			layoutWorkflow.add(layoutNode);
		} else {
			// eslint-disable-next-line no-console
			console.log('Node already exists in the workflow');
			// eslint-disable-next-line no-console
			console.log(layoutNode.action.name);
		}

		action.connections.items.forEach((connection) => {
			let { x } = origin;
			let { y } = origin;

			if (connection.to.id !== action.id) {
				switch (connection.type) {
					case EnumConnectionType.default:
						y = y + nodeHeight + nodeSpacingY;
						break;

					case EnumConnectionType.onNo:
						x -= nodeWidth + nodeSpacingX;
						break;

					case EnumConnectionType.onYes:
						x += nodeWidth + nodeSpacingX;
						break;

					default:
						break;
				}
				const childOrigin = new Origin(x, y);

				parseNodes(layoutWorkflow, connection.to, childOrigin);
			}
		});
	};

	return {
		layout,
	};
};

export default useWorkflowLayoutEngine;
