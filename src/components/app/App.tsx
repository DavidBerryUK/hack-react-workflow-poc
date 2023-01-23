import './styles/Styles.scss';
import { useState } from 'react';
import ActionRepoOrderLoad from '../../workflow/actions/repository/ActionRepoOrderLoad';
import EnumUserType from '../../workflowContext/enums/EnumUserType';
import FactoryDemoWorkflow from '../../workflow/factories/FactoryDemoWorkflow';
import UIReporting from '../reporting/UIReporting';
import UIWorkflow from '../workflow/UIWorkflow';
import UIWorkflowInputs from '../workflowInputs/UIWorkflowInputs';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import UserModel from '../../workflowContext/models/UserModel';
import useWorkflowLayoutEngine from '../../workflowServices/useWorkflowLayoutEngine';
import useWorkflowRunEngine from '../../workflowServices/useWorkflowRunEngine';

const App: React.FC = () => {
	const workflowLayoutEngine = useWorkflowLayoutEngine();

	const [workflow] = useState(FactoryDemoWorkflow.createWorkflow());
	const [workflowLayout] = useState(workflowLayoutEngine.layout(workflow));
	const context = new UpdatableContext();

	context.updateUser(new ActionRepoOrderLoad(), new UserModel('Gary', EnumUserType.staff), '');

	useWorkflowRunEngine(workflow, context);

	return (
		<div className="ui-app">
			<UIWorkflowInputs />
			<UIWorkflow auditLog={context.auditLog} workflow={workflowLayout} />
			<UIReporting context={context} />
		</div>
	);
};

export default App;
