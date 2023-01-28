import WorkflowAuditItem from '../../workflow/model/WorkflowAuditItem';
import UIIcon from '../ui/icons/UIIcon';
import UIIconBoolean from '../ui/icons/UIIconBoolean';
import UITextBody from '../ui/text/UITextBody';
import UITextCaption from '../ui/text/UITextCaption';
import UITextCardTitle from '../ui/text/UITextCardTitle';

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
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
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
