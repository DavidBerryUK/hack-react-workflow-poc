import './styles/Styles.scss';

// import { useState } from 'react';
import WorkflowAuditItem from '../../workflow/model/WorkflowAuditItem';
// import UIAuditInfo from '../auditDetail/UIAuditInfo';
import UIAuditList from '../auditList/UIAuditList';

const UIReporting: React.FC = () => {
	// const [auditInfo, setAuditInfo] = useState<WorkflowAuditItem | null>(null);

	const handleOnAuditItemSelectedEventHandler = (audit: WorkflowAuditItem) => {
		// eslint-disable-next-line no-console
		console.log(audit);
		// setAuditInfo(audit);
	};

	return (
		<div className="ui-reporting">
			<UIAuditList onClick={handleOnAuditItemSelectedEventHandler} />
			{/* <UIAuditInfo auditItem={auditInfo} /> */}
		</div>
	);
};

export default UIReporting;
