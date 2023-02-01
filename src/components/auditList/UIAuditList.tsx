import './styles/Styles.scss';

import { useWorkflowContext } from '../../contexts/workflowContext/WorkflowContext';
import WorkflowAuditItem from '../../workflow/model/WorkflowAuditItem';
import UIAuditItem from './UIAuditItem';

interface IProperties {
	onClick: (auditLog: WorkflowAuditItem) => void;
}

const UIAuditList: React.FC<IProperties> = (props) => {
	const { state } = useWorkflowContext();

	const handleOnClickEventHandler = (audit: WorkflowAuditItem) => {
		props.onClick(audit);
	};

	return (
		<div className="ui-audit-log">
			{state.updatableContext.auditLog.items.map((audit) => (
				<UIAuditItem key={audit.id} auditItem={audit} onClick={handleOnClickEventHandler} />
			))}
		</div>
	);
};

export default UIAuditList;
