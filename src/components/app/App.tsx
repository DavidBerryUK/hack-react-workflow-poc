import './styles/Styles.scss';

import { useState } from 'react';

import { ApplicationContextProvider } from '../../contexts/applicationContext/ApplicationContext';
import { RepositoryContextProvider } from '../../contexts/repositoryContext/RepositoryContext';
// import { WorkflowContextProvider } from '../../contexts/workflowContext/WorkflowContext';
import UserEntity from '../../repositories/entities/UserEntity';
import ActionRepoOrderLoad from '../../workflow/actions/repository/ActionRepoOrderLoad';
import FactoryDemoWorkflow from '../../workflow/factories/FactoryDemoWorkflow';
import EnumUserType from '../../workflowContext/enums/EnumUserType';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import useWorkflowLayoutEngine from '../../workflowServices/useWorkflowLayoutEngine';
import useWorkflowRunEngine from '../../workflowServices/useWorkflowRunEngine';
import UIReporting from '../reporting/UIReporting';
import UIRepositoryViewer from '../repository/repositoryViewer/UIRepositoryViewer';
import UIDrawerPanels from '../ui/drawerPanels/UIDrawerPanels';
import UIMasterDetail from '../ui/masterDetail/UIMasterDetail';
import UIToolbar from '../ui/toolbar/UIToolbar';
import UIWorkflow from '../workflow/UIWorkflow';
import UIWorkflowInputs from '../workflowInputs/UIWorkflowInputs';

const App: React.FC = () => {
	const workflowLayoutEngine = useWorkflowLayoutEngine();

	const [workflow] = useState(FactoryDemoWorkflow.createWorkflow());
	const [workflowLayout] = useState(workflowLayoutEngine.layout(workflow));
	const context = new UpdatableContext();

	context.updateUser(new ActionRepoOrderLoad(), new UserEntity('G', 'Gary', EnumUserType.Staff), '');

	useWorkflowRunEngine(workflow, context);

	return (
		<div className="ui-app">
			<ApplicationContextProvider>
				<RepositoryContextProvider>
					{/* <WorkflowContextProvider> */}
					<UIToolbar />
					<UIDrawerPanels
						leftPanel={<UIRepositoryViewer />}
						rightPanel={
							<UIMasterDetail
								masterTitle="audit"
								masterPanel={<div>audit list here</div>}
								detailTitle="Audit Instance"
								detailPanel={<div>instance info</div>}
							/>
						}
					>
						<UIWorkflowInputs />
						<UIWorkflow auditLog={context.auditLog} workflow={workflowLayout} />
						<UIReporting context={context} />
					</UIDrawerPanels>
					{/* </WorkflowContextProvider> */}
				</RepositoryContextProvider>
			</ApplicationContextProvider>
		</div>
	);
};

export default App;
