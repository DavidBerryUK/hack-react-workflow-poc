import WorkflowAuditItem from '../../workflow/model/WorkflowAuditItem';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import UIAuditItem from '../auditList/UIAuditItem';
import UIShowIfTrue from '../showIfTrue/UIShowIfTrue';
import UITextBody from '../text/UITextBody';
import UITextSubTitle from '../text/UITextSubTitle';
import UIContextInfo from './UIContextInfo';

interface IProperties {
	context: UpdatableContext;
	auditItem: WorkflowAuditItem | null;
}

const UIAuditInfo: React.FC<IProperties> = (props) => {
	const showHelpText = props.auditItem === null;
	const showAudit = props.auditItem !== null;

	return (
		<div>
			<UITextSubTitle>Audit Info</UITextSubTitle>
			<UIShowIfTrue value={showHelpText}>
				<UITextBody> click on an audit item to show more info</UITextBody>
			</UIShowIfTrue>
			<UIShowIfTrue value={showAudit}>
				<div className="ui-audit-log">
					<UIAuditItem auditItem={props.auditItem!} />
				</div>
				<UIContextInfo context={props.context} auditItem={props.auditItem!} />
			</UIShowIfTrue>
		</div>
	);
};

export default UIAuditInfo;
