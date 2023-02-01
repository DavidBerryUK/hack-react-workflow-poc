import './styles/Styles.scss';

import { useWorkflowContext } from '../../contexts/workflowContext/WorkflowContext';
import UITextSubTitle from '../ui/text/UITextSubTitle';
import UIWorkflowNode from './UIWorkflowNode';

const UIWorkflow: React.FC = () => {
	const { state } = useWorkflowContext();

	return (
		<div>
			<UITextSubTitle>Flow Chart</UITextSubTitle>
			<div className="ui-workflow">
				{state.workflowLayout.nodes.map((node) => (
					<UIWorkflowNode key={node.action.id} layoutNode={node} />
				))}
			</div>
		</div>
	);
};

export default UIWorkflow;
