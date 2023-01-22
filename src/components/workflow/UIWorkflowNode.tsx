import WorkflowAuditLog from '../../workflowAudit/WorkflowAuditLog';
import LayoutNode from '../../workflowServices/models/LayoutNode';
import UIIcon from '../icons/UIIcon';
import UIIconBoolean from '../icons/UIIconBoolean';

interface IProperties {
	layoutNode: LayoutNode;
	auditLog: WorkflowAuditLog;
}

const UIWorkflowNode: React.FC<IProperties> = (props) => {
	const style = {
		top: props.layoutNode.rectangle.top,
		left: props.layoutNode.rectangle.left,
		width: props.layoutNode.rectangle.width,
		height: props.layoutNode.rectangle.height,
	};

	let className = 'region-right';
	let step = '';
	let success: boolean | undefined;
	var audits = props.auditLog.items.filter((audit) => audit.action.id === props.layoutNode.action.id);
	if (audits.length > 0) {
		step = `${audits[0].step}`;
		success = audits[0].result?.successful;
		if (success) {
			className = `${className} success`;
		}
	}

	return (
		<div className="ui-node" style={style}>
			<div className="region-left">
				<div>{step}</div>
				<div>
					<UIIcon icon={props.layoutNode.action.icon} />
				</div>
			</div>
			<div className="region-body">{props.layoutNode.action.name}</div>
			<div className={className}>
				<UIIconBoolean value={success} />
			</div>
		</div>
	);
};

export default UIWorkflowNode;
