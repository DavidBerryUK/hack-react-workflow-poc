import UIIcon from '../icons/UIIcon';
import UIIconBoolean from '../icons/UIIconBoolean';
import UITextCaption from '../text/UITextCaption';
import UITextCardTitle from '../text/UITextCardTitle';
import WorkflowAuditItem from '../../workflowAudit/WorkflowAuditItem';

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
			</div>
			<div className="region-right success">
				<UIIconBoolean value={props.auditItem.result?.successful} />
			</div>
			<div className="region-footer">
				<UITextCaption>duration: {props.auditItem.duration} ms</UITextCaption>
			</div>
		</div>
	);
};

export default UIAuditItem;
