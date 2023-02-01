import { useWorkflowContext } from '../../contexts/workflowContext/WorkflowContext';
import LayoutNode from '../../workflowServices/models/LayoutNode';
import UIIcon from '../ui/icons/UIIcon';
import UIIconBoolean from '../ui/icons/UIIconBoolean';
import UIWorkflowArrows from './UIWorkflowArrows';

interface IProperties {
	layoutNode: LayoutNode;
}

const UIWorkflowNode: React.FC<IProperties> = (props) => {
	const { state } = useWorkflowContext();

	const style = {
		top: props.layoutNode.rectangle.top,
		left: props.layoutNode.rectangle.left,
		width: props.layoutNode.rectangle.width,
		height: props.layoutNode.rectangle.height,
	};

	let className = 'region-right';
	let step = '';
	let success: boolean | undefined;
	const audits = state.updatableContext.auditLog.items.filter((audit) => audit.action.id === props.layoutNode.action.id);
	if (audits.length > 0) {
		step = `${audits[0].step}`;
		success = audits[0].result?.successful;
		if (success) {
			className = `${className} success`;
		} else {
			className = `${className} fail`;
		}
	}

	return (
		<>
			<div className="ui-node" style={style}>
				<div className="region-left">
					<div>{step}</div>
					<div>
						<UIIcon icon={props.layoutNode.action.icon} />
					</div>
				</div>
				<div className="region-body">{props.layoutNode.action.name}</div>
				<div className={className}>
					<UIIconBoolean value={success} />
				</div>
			</div>
			<UIWorkflowArrows layoutNode={props.layoutNode} />
		</>
	);
};

export default UIWorkflowNode;
