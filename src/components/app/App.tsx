import { useState } from 'react';
import FactoryDemoWorkflow from '../../workflow/factories/FactoryDemoWorkflow';
import UIWorkflow from '../workflow/UIWorkflow';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import useWorkflowLayoutEngine from '../../workflowServices/useWorkflowLayoutEngine';
import useWorkflowRunEngine from '../../workflowServices/useWorkflowRunEngine';

const App: React.FC = () => {
	const workflowLayoutEngine = useWorkflowLayoutEngine();

	const [workflow] = useState(FactoryDemoWorkflow.createWorkflow());
	const [workflowLayout] = useState(workflowLayoutEngine.layout(workflow));
	const context = new UpdatableContext();

	// run the workflow
	useWorkflowRunEngine(workflow, context);

	return (
		<div>
			<UIWorkflow workflow={workflowLayout} />
		</div>
	);
};

export default App;
