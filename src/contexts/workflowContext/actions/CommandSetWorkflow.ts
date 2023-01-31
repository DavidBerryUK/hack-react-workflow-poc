import Workflow from '../../../workflow/Workflow';
import { IWorkflowContextDispatchCommand, WorkflowContextProps } from '../WorkflowContext';

export default class CommandSetWorkflow implements IWorkflowContextDispatchCommand {
	private readonly workflow: Workflow;

	constructor(workflow: Workflow) {
		this.workflow = workflow;
	}

	execute(state: WorkflowContextProps): WorkflowContextProps {
		return {
			...state,
			workflow: this.workflow,
		};
	}
}
