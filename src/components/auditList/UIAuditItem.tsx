import UIIcon from '../icons/UIIcon';
import UIIconBoolean from '../icons/UIIconBoolean';
import UITextCaption from '../text/UITextCaption';
import UITextCardTitle from '../text/UITextCardTitle';
import WorkflowAuditItem from '../../workflowAudit/WorkflowAuditItem';
import UITextBody from '../text/UITextBody';

interface IProperties {
	auditItem: WorkflowAuditItem;
	onClick?: (auditLog: WorkflowAuditItem) => void;
}

const UIAuditItem: React.FC<IProperties> = (props) => {
	const handleOnClickEventHandler = () => {
		if (props.onClick) {
			props.onClick(props.auditItem);
		}
	};

	let statusClassName = 'region-right ';
	if (props.auditItem.result?.successful) {
		statusClassName = `${statusClassName} success`;
	} else {
		statusClassName = `${statusClassName} fail`;
	}

	return (
		<div className="ui-audit-item" onClick={handleOnClickEventHandler}>
			<div className="region-left">
				<div>step {props.auditItem.step}</div>
				<div>
					<UIIcon icon={props.auditItem.action.icon} />
				</div>
			</div>
			<div className="region-body">
				<UITextCardTitle>{props.auditItem.action.name}</UITextCardTitle>
				<UITextBody>{props.auditItem.result?.message}</UITextBody>
			</div>
			<div className={statusClassName}>
				<UIIconBoolean value={props.auditItem.result?.successful} />
			</div>
			<div className="region-footer">
				<UITextCaption>duration: {props.auditItem.duration} ms</UITextCaption>
			</div>
		</div>
	);
};

export default UIAuditItem;
