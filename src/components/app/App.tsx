import './styles/Styles.scss';

import { useEffect } from 'react';

import CommandSetUpdatableContext from '../../contexts/workflowContext/actions/CommandSetUpdatableContext';
import CommandSetWorkflow from '../../contexts/workflowContext/actions/CommandSetWorkflow';
import CommandSetWorkflowLayout from '../../contexts/workflowContext/actions/CommandSetWorkflowLayout';
import { useWorkflowContext } from '../../contexts/workflowContext/WorkflowContext';
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
	const { state, dispatch } = useWorkflowContext();

	const workflowLayoutEngine = useWorkflowLayoutEngine();
	const workflowRunEngine = useWorkflowRunEngine();

	useEffect(() => {
		const workflow = FactoryDemoWorkflow.createWorkflow();
		const layout = workflowLayoutEngine.layout(workflow);
		const updatableContext = new UpdatableContext();
		dispatch(new CommandSetWorkflow(workflow));
		dispatch(new CommandSetWorkflowLayout(layout));
		dispatch(new CommandSetUpdatableContext(updatableContext));

		state.updatableContext.updateUser(new ActionRepoOrderLoad(), new UserEntity('G', 'Gary', EnumUserType.Staff), '');
		workflowRunEngine.executeWorkflow(workflow, updatableContext);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return (
		<div className="ui-app">
			<UIToolbar />
			<UIDrawerPanels
				leftPanel={<UIRepositoryViewer />}
				rightPanel={
					<UIMasterDetail masterTitle="audit" masterPanel={<UIReporting />} detailTitle="Audit Instance" detailPanel={<div>instance info</div>} />
				}
			>
				<UIWorkflowInputs />
				<UIWorkflow />
			</UIDrawerPanels>
		</div>
	);
};

export default App;
