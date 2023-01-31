import LayoutWorkflowModel from '../../../workflowServices/models/LayoutWorkflow';
import { IWorkflowContextDispatchCommand, WorkflowContextProps } from '../WorkflowContext';

export default class CommandSetWorkflowLayout implements IWorkflowContextDispatchCommand {
	private readonly layout: LayoutWorkflowModel;

	constructor(layout: LayoutWorkflowModel) {
		this.layout = layout;
	}

	execute(state: WorkflowContextProps): WorkflowContextProps {
		return {
			...state,
			workflowLayout: this.layout,
		};
	}
}
