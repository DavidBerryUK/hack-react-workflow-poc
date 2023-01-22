import './styles/Styles.scss';
import { useState } from 'react';
import FactoryDemoWorkflow from '../../workflow/factories/FactoryDemoWorkflow';
import UIWorkflow from '../workflow/UIWorkflow';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import useWorkflowLayoutEngine from '../../workflowServices/useWorkflowLayoutEngine';
import useWorkflowRunEngine from '../../workflowServices/useWorkflowRunEngine';
import UIReporting from '../reporting/UIReporting';
import UIWorkflowInputs from '../workflowInputs/UIWorkflowInputs';

const App: React.FC = () => {
	const workflowLayoutEngine = useWorkflowLayoutEngine();

	const [workflow] = useState(FactoryDemoWorkflow.createWorkflow());
	const [workflowLayout] = useState(workflowLayoutEngine.layout(workflow));
	const context = new UpdatableContext();

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
