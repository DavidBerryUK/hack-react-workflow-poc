import WorkflowAuditItem from '../../workflowAudit/WorkflowAuditItem';
import UIIcon from '../icons/UIIcon';
import UIIconBoolean from '../icons/UIIconBoolean';

interface IProperties {
	audit: WorkflowAuditItem;
}

const UIAuditItem: React.FC<IProperties> = (props) => {
	return (
		<div className="ui-audit-item">
			<UIIcon icon={props.audit.action.icon} />
			{props.audit.step}:{props.audit.action.name}
			<UIIconBoolean value={props.audit.result?.successful} />
		</div>
	);
};

export default UIAuditItem;
