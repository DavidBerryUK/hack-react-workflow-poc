import FactoryDemoWorkflow from '../../workflow/factories/FactoryDemoWorkflow';
import UIWorkflow from '../workflow/UIWorkflow';
import { useState } from 'react';
import useWorkflowLayoutEngine from '../../workflowServices/layout/WorkflowLayoutEngine';

const App: React.FC = () => {
	const workflowLayoutEngine = useWorkflowLayoutEngine();
	const [workflow] = useState(FactoryDemoWorkflow.createWorkflow());
	const [workflowLayout] = useState(workflowLayoutEngine.layout(workflow));

	return (
		<div>
			my app: {workflow.nodes.length}
			<UIWorkflow workflow={workflowLayout} />
		</div>
	);
};

export default App;
