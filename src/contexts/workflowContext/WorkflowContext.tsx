import React, { Dispatch, Reducer } from 'react';

import Workflow from '../../workflow/Workflow';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import LayoutWorkflowModel from '../../workflowServices/models/LayoutWorkflow';

export interface IWorkflowContextDispatchCommand {
	execute(state: WorkflowContextProps): WorkflowContextProps;
}

// Interface defining data structure stored in this context
//
export interface WorkflowContextProps {
	workflow: Workflow;
	workflowLayout: LayoutWorkflowModel;
	updatableContext: UpdatableContext;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the IWorkflowContextDispatchCommand interface
export interface InitContextProps {
	state: WorkflowContextProps;
	dispatch: Dispatch<IWorkflowContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: WorkflowContextProps = {
	workflow: new Workflow([]),
	workflowLayout: new LayoutWorkflowModel(),
	updatableContext: new UpdatableContext(),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<WorkflowContextProps, IWorkflowContextDispatchCommand> = (state, command) => {
	//
	// each command updates the context state
	// helping to keep the context cleaner
	//
	return command.execute(state);
};

// Create the actual context
//
const WorkflowContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the Repository,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WorkflowContextProvider(props: any) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { state, dispatch };

	return <WorkflowContext.Provider value={value}>{props.children}</WorkflowContext.Provider>;
}

// Export the context
//
export const WorkflowContextConsumer = WorkflowContext.Consumer;
export default WorkflowContext;

// Helper Function to access context
//
export const useWorkflowContext = () => {
	return React.useContext(WorkflowContext);
};
