import './styles/Styles.scss';

import { RepositoryContextProvider } from '../../contexts/repositoryContext/RepositoryContext';
// import { useState } from 'react';
// import UserEntity from '../../repositories/entities/UserEntity';
// import ActionRepoOrderLoad from '../../workflow/actions/repository/ActionRepoOrderLoad';
// import FactoryDemoWorkflow from '../../workflow/factories/FactoryDemoWorkflow';
// import EnumUserType from '../../workflowContext/enums/EnumUserType';
// import UpdatableContext from '../../workflowContext/models/UpdatableContext';
// import useWorkflowLayoutEngine from '../../workflowServices/useWorkflowLayoutEngine';
// import useWorkflowRunEngine from '../../workflowServices/useWorkflowRunEngine';
// import UIReporting from '../reporting/UIReporting';
import UIRepositoryViewer from '../repository/repositoryViewer/UIRepositoryViewer';
// import UIWorkflow from '../workflow/UIWorkflow';
// import UIWorkflowInputs from '../workflowInputs/UIWorkflowInputs';

const App: React.FC = () => {
	// const workflowLayoutEngine = useWorkflowLayoutEngine();

	// const [workflow] = useState(FactoryDemoWorkflow.createWorkflow());
	// const [workflowLayout] = useState(workflowLayoutEngine.layout(workflow));
	// const context = new UpdatableContext();

	// context.updateUser(new ActionRepoOrderLoad(), new UserEntity('G', 'Gary', EnumUserType.staff), '');

	// useWorkflowRunEngine(workflow, context);

	// <UIWorkflowInputs />
	// <UIWorkflow auditLog={context.auditLog} workflow={workflowLayout} />
	// <UIReporting context={context} />

	return (
		<div className="ui-app">
			<RepositoryContextProvider>
				<UIRepositoryViewer />
			</RepositoryContextProvider>
		</div>
	);
};

export default App;
