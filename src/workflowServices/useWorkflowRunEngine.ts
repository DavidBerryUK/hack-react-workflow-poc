import { nanoid } from 'nanoid';
import ActionExecutionResult from '../workflow/model/ActionExecutionResult';
import Connection from '../workflow/connections/Connection';
import IAction from '../workflow/actions/interfaces/IAction';
import UpdatableContext from '../workflowContext/models/UpdatableContext';
import Workflow from '../workflow/Workflow';
import WorkflowAuditItem from '../workflowAudit/WorkflowAuditItem';

const useWorkflowRunEngine = (workflow: Workflow, context: UpdatableContext) => {
	const executeWorkflow = () => {
		let node: IAction | undefined = workflow.startNode;

		if (node === null) {
			throw new Error('Workflow must have a start node');
		}

		//
		// loop though nodes in sequence
		//
		do {
			console.log(`executing node ${node.name}`);

			const transactionId = nanoid();
			const audit = new WorkflowAuditItem(node, transactionId);
			context.auditLog.add(audit);

			//
			// execute node
			//
			const result = node.execute(context);
			audit.complete(result);

			node = getNextNode(node, result);
		} while (node !== undefined);
	};

	//
	// get the next node in the sequence
	//
	const getNextNode = (node: IAction, lastResult: ActionExecutionResult): IAction | undefined => {
		var connection: Connection | undefined;
		if (lastResult.successful) {
			connection = node.connections.getSuccessOrDefaultConnectionFrom(node);
		} else {
			connection = node.connections.getFailureConnectionFrom(node);
		}

		return connection?.to;
	};

	executeWorkflow();
};

export default useWorkflowRunEngine;
