import './styles/Styles.scss';
import { useState } from 'react';
import UIAuditInfo from '../auditDetail/UIAuditInfo';
import UIAuditList from '../auditList/UIAuditList';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import WorkflowAuditItem from '../../workflowAudit/WorkflowAuditItem';

interface IProperties {
	context: UpdatableContext;
}

const UIReporting: React.FC<IProperties> = (props) => {
	const [auditInfo, setAuditInfo] = useState<WorkflowAuditItem | null>(null);

	const handleOnAuditItemSelectedEventHandler = (audit: WorkflowAuditItem) => {
		setAuditInfo(audit);
	};

	return (
		<div className="ui-reporting">
			<UIAuditList auditLog={props.context.auditLog} onClick={handleOnAuditItemSelectedEventHandler} />
			<UIAuditInfo context={props.context} auditItem={auditInfo}></UIAuditInfo>
		</div>
	);
};

export default UIReporting;
