import { nanoid } from 'nanoid';

import IAction from '../workflow/actions/interfaces/IAction';
import EnumConnectionType from '../workflow/connections/EnumConnectionType';
import ActionExecutionResult from '../workflow/model/ActionExecutionResult';
import WorkflowAuditItem from '../workflow/model/WorkflowAuditItem';
import Workflow from '../workflow/Workflow';
import UpdatableContext from '../workflowContext/models/UpdatableContext';

const useWorkflowRunEngine = () => {
	const executeWorkflow = (workflow: Workflow | undefined, context: UpdatableContext | undefined) => {
		if (workflow === undefined || workflow.startNode === undefined || context === undefined) {
			return;
		}

		let node: IAction | undefined = workflow.startNode;

		if (node === null) {
			throw new Error('Workflow must have a start node');
		}

		//
		// loop though nodes in sequence
		//
		do {
			if (node !== undefined) {
				const transactionId = nanoid();
				const audit = new WorkflowAuditItem(node, transactionId);
				context.auditLog.add(audit);

				//
				// execute node
				//
				const result = node.execute(context);
				audit.complete(result);

				node = getNextNode(node, result);
			}
		} while (node !== undefined);
	};

	//
	// get the next node in the flow sequence
	//
	const getNextNode = (node: IAction, lastResult: ActionExecutionResult): IAction | undefined => {
		//
		// when a node executes, it returns the type of its preferred connection to use to the next node.
		// This logic retrieves that connection and flow-to node.
		//
		// If the node failed to execute successfully, the only connections allowed is the onFail connection,
		//  if this is not specified then the workflow stops running
		//
		const nextConnection = node.connections.getTypeOrDefaultFrom(node, lastResult.exitConnection);
		if (lastResult.successful === false && nextConnection?.type !== EnumConnectionType.onFail) {
			return undefined;
		}

		return nextConnection?.to;
	};

	return {
		executeWorkflow,
	};
};

export default useWorkflowRunEngine;
