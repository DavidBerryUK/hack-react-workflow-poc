import { useState } from 'react';
import FactoryDemoWorkflow from '../../workflow/factories/FactoryDemoWorkflow';
import UIWorkflow from '../workflow/UIWorkflow';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import useWorkflowLayoutEngine from '../../workflowServices/useWorkflowLayoutEngine';
import useWorkflowRunEngine from '../../workflowServices/useWorkflowRunEngine';
import UIAuditList from '../auditList/UIAuditList';
import './styles/Styles.scss';

const App: React.FC = () => {
	const workflowLayoutEngine = useWorkflowLayoutEngine();

	const [workflow] = useState(FactoryDemoWorkflow.createWorkflow());
	const [workflowLayout] = useState(workflowLayoutEngine.layout(workflow));
	const context = new UpdatableContext();

	// run the workflow
	useWorkflowRunEngine(workflow, context);

	return (
		<div className="ui-app">
			<UIWorkflow auditLog={context.auditLog} workflow={workflowLayout} />
			<UIAuditList auditLog={context.auditLog} />
		</div>
	);
};

export default App;
