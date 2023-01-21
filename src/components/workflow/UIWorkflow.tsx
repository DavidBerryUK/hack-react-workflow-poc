import LayoutWorkflowModel from '../../workflowServices/models/LayoutWorkflow';
import './styles/Styles.scss';
import UIWorkflowNode from './UIWorkflowNode';

interface IProperties {
	workflow: LayoutWorkflowModel;
}

const UIWorkflow: React.FC<IProperties> = (props) => {
	return (
		<div className="ui-workflow">
			{props.workflow.nodes.map((node) => (
				<UIWorkflowNode key={node.action.id} layoutNode={node} />
			))}
		</div>
	);
};

export default UIWorkflow;
