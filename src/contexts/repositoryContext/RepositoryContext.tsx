import React, { Dispatch, Reducer } from 'react';

import EntityFactoryOrders from '../../repositories/EntityFactories/EntityFactoryOrders';
import EntityFactoryUsers from '../../repositories/EntityFactories/EntityFactoryUsers';
import EntityFactoryVehicles from '../../repositories/EntityFactories/EntityFactoryVehicles';
import MockRepositoryOrders from '../../repositories/mockRepositories/MockRepositoryOrders';
import MockRepositoryUsers from '../../repositories/mockRepositories/MockRepositoryUsers';
import MockRepositoryVehicles from '../../repositories/mockRepositories/MockRepositoryVehicles';

export interface IRepositoryContextDispatchCommand {
	execute(state: RepositoryContextProps): RepositoryContextProps;
}

// Interface defining data structure stored in this context
//
export interface RepositoryContextProps {
	orders: MockRepositoryOrders;
	users: MockRepositoryUsers;
	vehicles: MockRepositoryVehicles;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the IRepositoryContextDispatchCommand interface
export interface InitContextProps {
	state: RepositoryContextProps;
	dispatch: Dispatch<IRepositoryContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: RepositoryContextProps = {
	orders: new MockRepositoryOrders(new EntityFactoryOrders()),
	users: new MockRepositoryUsers(new EntityFactoryUsers()),
	vehicles: new MockRepositoryVehicles(new EntityFactoryVehicles()),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<RepositoryContextProps, IRepositoryContextDispatchCommand> = (state, command) => {
	//
	// each command updates the context state
	// helping to keep the context cleaner
	//
	return command.execute(state);
};

// Create the actual context
//
const RepositoryContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the Repository,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RepositoryContextProvider(props: any) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { state, dispatch };

	return <RepositoryContext.Provider value={value}>{props.children}</RepositoryContext.Provider>;
}

// Export the context
//
export const RepositoryContextConsumer = RepositoryContext.Consumer;
export default RepositoryContext;

// Helper Function to access context
//
export const useRepositoryContext = () => {
	return React.useContext(RepositoryContext);
};
