import './styles/Styles.scss';

import { useState } from 'react';

import WorkflowAuditItem from '../../workflow/model/WorkflowAuditItem';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import UIAuditInfo from '../auditDetail/UIAuditInfo';
import UIAuditList from '../auditList/UIAuditList';

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
			<UIAuditInfo context={props.context} auditItem={auditInfo} />
		</div>
	);
};

export default UIReporting;
