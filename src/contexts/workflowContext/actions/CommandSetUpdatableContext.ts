import UpdatableContext from '../../../workflowContext/models/UpdatableContext';
import { IWorkflowContextDispatchCommand, WorkflowContextProps } from '../WorkflowContext';

export default class CommandSetUpdatableContext implements IWorkflowContextDispatchCommand {
	private readonly context: UpdatableContext;

	constructor(context: UpdatableContext) {
		this.context = context;
	}

	execute(state: WorkflowContextProps): WorkflowContextProps {
		return {
			...state,
			updatableContext: this.context,
		};
	}
}
