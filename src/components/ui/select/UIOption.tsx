import KeyValueModel from '../../../utilities/KeyValueModel';

interface IProperties {
	item: KeyValueModel;
}

const UIOption: React.FC<IProperties> = (props) => {
	return <option value={`${props.item.key}`}>{props.item.value}</option>;
};

export default UIOption;
