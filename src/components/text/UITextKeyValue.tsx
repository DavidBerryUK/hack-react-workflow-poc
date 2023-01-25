import UITextBody from './UITextBody';
import UITextCaption from './UITextCaption';

interface IProperties {
	label: string;
	value: string;
}
const UITextKeyValue: React.FC<IProperties> = (props) => {
	return (
		<div>
			<label htmlFor="type" className="col-form-label ui-label-compact">
				<UITextCaption>{props.label}</UITextCaption>
				<UITextBody inset>{props.value}</UITextBody>
			</label>
		</div>
	);
};

export default UITextKeyValue;
