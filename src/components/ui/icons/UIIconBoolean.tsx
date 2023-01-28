import UIIconCross from './UIIconCross';
import UIIconQuestion from './UIIconQuestion';
import UIIconTick from './UIIconTick';

interface IProperties {
	value: boolean | undefined;
}

const UIIconBoolean: React.FC<IProperties> = (props) => {
	if (props.value === true) {
		return <UIIconTick />;
	}
	if (props.value === false) {
		return <UIIconCross />;
	}
	return <UIIconQuestion />;
};

export default UIIconBoolean;
