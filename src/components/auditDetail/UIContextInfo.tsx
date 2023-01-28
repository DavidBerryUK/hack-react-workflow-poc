import WorkflowAuditItem from '../../workflow/model/WorkflowAuditItem';
import UpdatableContext from '../../workflowContext/models/UpdatableContext';
import UIShowIfTrue from '../ui/showIfTrue/UIShowIfTrue';
import UITextBody from '../ui/text/UITextBody';
import UITextCaption from '../ui/text/UITextCaption';
import UITextSubTitle from '../ui/text/UITextSubTitle';

interface IProperties {}

interface IProperties {
	context: UpdatableContext;
	auditItem: WorkflowAuditItem | null;
}

const UIContextInfo: React.FC<IProperties> = (props) => {
	if (props.auditItem === null) {
		return null;
	}

	//
	// find transaction
	//
	const { transactionId } = props.auditItem;
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
