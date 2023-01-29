import UIIconCross from './UIIconCross';
import UIIconQuestion from './UIIconQuestion';
import UIIconTick from './UIIconTick';

interface IProperties {
	value: boolean | undefined;
	className?: string;
}

const UIIconBoolean: React.FC<IProperties> = (props) => {
	if (props.value === true) {
		return <UIIconTick className={props.className} />;
	}
	if (props.value === false) {
		return <UIIconCross className={props.className} />;
	}
	return <UIIconQuestion className={props.className} />;
};

export default UIIconBoolean;
