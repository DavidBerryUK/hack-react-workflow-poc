import EnumNodeType from '../../workflow/enums/EnumNodeType';
import LayoutNode from '../../workflowServices/models/LayoutNode';
import UIIconArrowDown from '../icons/UIIconArrowDown';
import UIIconArrowLeft from '../icons/UIIconArrowLeft';
import UIIconArrowRight from '../icons/UIIconArrowRight';
import UIShowIfTrue from '../showIfTrue/UIShowIfTrue';
import UITextCaption from '../text/UITextCaption';

interface IProperties {
	layoutNode: LayoutNode;
}

const UIWorkflowArrows: React.FC<IProperties> = (props) => {
	const styleDown = {
		top: props.layoutNode.rectangle.bottom + 2,
		left: props.layoutNode.rectangle.centerX - 15,
		width: 30,
		height: 30,
	};

	const styleRight = {
		top: props.layoutNode.rectangle.centerY - 15,
		left: props.layoutNode.rectangle.right + 20,
		width: 30,
		height: 30,
	};

	const styleLeft = {
		top: props.layoutNode.rectangle.centerY - 15,
		left: props.layoutNode.rectangle.left - 50,
		width: 30,
		height: 30,
	};

	const showLeft = props.layoutNode.action.nodeType === EnumNodeType.branching;
	const showRight = props.layoutNode.action.nodeType === EnumNodeType.branching;
	const showBottom = props.layoutNode.action.connections.getYesOrDefaultConnectionFrom(props.layoutNode.action) !== undefined && showLeft === false;

	return (
		<>
			<UIShowIfTrue value={showBottom}>
				<div className="ui-arrow" style={styleDown}>
					<UIIconArrowDown />
				</div>
			</UIShowIfTrue>

			<UIShowIfTrue value={showRight}>
				<div className="ui-arrow" style={styleRight}>
					<UITextCaption>yes</UITextCaption>
					<UIIconArrowRight />
				</div>
			</UIShowIfTrue>

			<UIShowIfTrue value={showLeft}>
				<div className="ui-arrow" style={styleLeft}>
					<UIIconArrowLeft />
					<UITextCaption>no</UITextCaption>
				</div>
			</UIShowIfTrue>
		</>
	);
};

export default UIWorkflowArrows;
