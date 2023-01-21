import LayoutNode from '../../workflowServices/models/LayoutNode';

interface IProperties {
	layoutNode: LayoutNode;
}

const UIWorkflowNode: React.FC<IProperties> = (props) => {
	const style = {
		top: props.layoutNode.rectangle.top,
		left: props.layoutNode.rectangle.left,
		width: props.layoutNode.rectangle.width,
		height: props.layoutNode.rectangle.height,
	};

	return (
		<div className="ui-node" style={style}>
			<div key={props.layoutNode.action.id}>{props.layoutNode.action.name}</div>
		</div>
	);
};

export default UIWorkflowNode;
