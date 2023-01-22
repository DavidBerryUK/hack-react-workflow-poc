import WorkflowAuditLog from '../../workflowAudit/WorkflowAuditLog';
import './styles/Styles.scss';
import UIAuditItem from './UIAuditItem';

interface IProperties {
	auditLog: WorkflowAuditLog;
}

const UIAuditList: React.FC<IProperties> = (props) => {
	return (
		<div className="ui-audit-log">
			{props.auditLog.items.map((audit) => (
				<UIAuditItem key={audit.id} audit={audit} />
			))}
		</div>
	);
};

export default UIAuditList;
