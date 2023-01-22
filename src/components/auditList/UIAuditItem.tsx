import WorkflowAuditItem from '../../workflowAudit/WorkflowAuditItem';
import UIIcon from '../icons/UIIcon';
import UIIconBoolean from '../icons/UIIconBoolean';

interface IProperties {
	audit: WorkflowAuditItem;
}

const UIAuditItem: React.FC<IProperties> = (props) => {
	return (
		<div className="ui-audit-item">
			<div className="region-left">
				<div>step {props.audit.step}</div>
				<div>
					<UIIcon icon={props.audit.action.icon} />
				</div>
			</div>
			<div className="region-body">{props.audit.action.name}</div>
			<div className="region-right success">
				<UIIconBoolean value={props.audit.result?.successful} />
			</div>
		</div>
	);
};

export default UIAuditItem;
