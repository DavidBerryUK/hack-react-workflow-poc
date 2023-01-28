import './styles/Styles.scss';

import WorkflowAuditLog from '../../workflow/model/WorkflowAuditLog';
import LayoutWorkflowModel from '../../workflowServices/models/LayoutWorkflow';
import UITextSubTitle from '../ui/text/UITextSubTitle';
import UIWorkflowNode from './UIWorkflowNode';

interface IProperties {
	workflow: LayoutWorkflowModel;
	auditLog: WorkflowAuditLog;
}

const UIWorkflow: React.FC<IProperties> = (props) => {
	return (
		<div>
			<UITextSubTitle>Flow Chart</UITextSubTitle>
			<div className="ui-workflow">
				{props.workflow.nodes.map((node) => (
					<UIWorkflowNode key={node.action.id} auditLog={props.auditLog} layoutNode={node} />
				))}
			</div>
		</div>
	);
};

export default UIWorkflow;
