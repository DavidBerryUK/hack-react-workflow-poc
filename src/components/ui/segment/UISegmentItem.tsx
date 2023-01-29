import KeyValueModel from '../../../utilities/KeyValueModel';

interface IProperties {
	selected: boolean;
	item: KeyValueModel;
	onSelected: (item: KeyValueModel) => void;
}

const UISegmentItem: React.FC<IProperties> = (props) => {
	const className = (): string => {
		if (props.selected) {
			return 'btn btn-primary';
		}
		return 'btn btn-outline-primary';
	};

	const handleOnButtonClickedEvent = () => {
		props.onSelected(props.item);
	};

	return (
		<button type="button" className={className()} onClick={handleOnButtonClickedEvent}>
			{props.item.value}
		</button>
	);
};

export default UISegmentItem;
