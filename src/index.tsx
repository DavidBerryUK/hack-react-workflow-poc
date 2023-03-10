import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';
import { ApplicationContextProvider } from './contexts/applicationContext/ApplicationContext';
import { RepositoryContextProvider } from './contexts/repositoryContext/RepositoryContext';
import { WorkflowContextProvider } from './contexts/workflowContext/WorkflowContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ApplicationContextProvider>
			<RepositoryContextProvider>
				<WorkflowContextProvider>
					<App />
				</WorkflowContextProvider>
			</RepositoryContextProvider>
		</ApplicationContextProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
