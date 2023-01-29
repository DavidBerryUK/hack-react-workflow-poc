import React, { Dispatch, Reducer } from 'react';

export interface IApplicationContextDispatchCommand {
	execute(state: ApplicationContextProps): ApplicationContextProps;
}

// Interface defining data structure stored in this context
//
export interface ApplicationContextProps {
	drawerLeftIsOpen: boolean;
	drawerRightIsOpen: boolean;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the IApplicationContextDispatchCommand interface
export interface InitContextProps {
	state: ApplicationContextProps;
	dispatch: Dispatch<IApplicationContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: ApplicationContextProps = {
	drawerLeftIsOpen: true,
	drawerRightIsOpen: true,
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<ApplicationContextProps, IApplicationContextDispatchCommand> = (state, command) => {
	//
	// each command updates the context state
	// helping to keep the context cleaner
	//
	return command.execute(state);
};

// Create the actual context
//
const ApplicationContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the Application,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ApplicationContextProvider(props: any) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { state, dispatch };

	return <ApplicationContext.Provider value={value}>{props.children}</ApplicationContext.Provider>;
}

// Export the context
//
export const ApplicationContextConsumer = ApplicationContext.Consumer;
export default ApplicationContext;

// Helper Function to access context
//
export const useApplicationContext = () => {
	return React.useContext(ApplicationContext);
};
