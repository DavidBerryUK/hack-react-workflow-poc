import './styles/Styles.scss';

import WorkflowAuditItem from '../../workflow/model/WorkflowAuditItem';
import WorkflowAuditLog from '../../workflow/model/WorkflowAuditLog';
import UITextSubTitle from '../text/UITextSubTitle';
import UIAuditItem from './UIAuditItem';

interface IProperties {
	auditLog: WorkflowAuditLog;
	onClick: (auditLog: WorkflowAuditItem) => void;
}

const UIAuditList: React.FC<IProperties> = (props) => {
	const handleOnClickEventHandler = (audit: WorkflowAuditItem) => {
		props.onClick(audit);
	};

	return (
		<div>
			<UITextSubTitle>Audit List</UITextSubTitle>
			<div className="ui-audit-log">
				{props.auditLog.items.map((audit) => (
					<UIAuditItem key={audit.id} auditItem={audit} onClick={handleOnClickEventHandler} />
				))}
			</div>
		</div>
	);
};

export default UIAuditList;
