import UIShowIfTrue from '../showIfTrue/UIShowIfTrue';
import UITextBody from '../text/UITextBody';
import UITextCaption from '../text/UITextCaption';
import UITextSubTitle from '../text/UITextSubTitle';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import WorkflowAuditItem from '../../workflowAudit/WorkflowAuditItem';

interface IProperties {}

interface IProperties {
	context: UpdatableContext;
	auditItem: WorkflowAuditItem | null;
}

const UIContextInfo: React.FC<IProperties> = (props) => {
	if (props.auditItem === null) {
		return <></>;
	}

	//
	// find transaction
	//
	const transactionId = props.auditItem.transactionId;
	const snapShot = props.context.getSnapShotForTransaction(transactionId);
	const showNoSnapShot = snapShot === undefined;
	const showSnapShot = snapShot !== undefined;

	return (
		<div>
			<UITextSubTitle>Transaction</UITextSubTitle>
			<UIShowIfTrue value={showNoSnapShot}>
				<UITextBody>There is no context transaction for this action.</UITextBody>
				<UITextBody>This means no updates were performed</UITextBody>
			</UIShowIfTrue>
			<UIShowIfTrue value={showSnapShot}>
				<UITextCaption>Transaction Id:{transactionId}</UITextCaption>
			</UIShowIfTrue>
		</div>
	);
};

export default UIContextInfo;
