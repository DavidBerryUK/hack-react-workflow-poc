import { ReactNode } from 'react';

import EnumIcon from '../icons/enum/EnumIcon';
import UIIcon from '../icons/UIIcon';

interface IProperties {
	children?: ReactNode;
	onClick?: () => void;
	icon?: EnumIcon;
	small?: boolean;
}

const UIButton: React.FC<IProperties> = (props) => {
	const className = (): string => {
		let result = 'btn btn-light';

		if (props.small === true) {
			result = `${result} btn-sm`;
		}
		return result;
	};

	const handleOnButtonClickedEvent = () => {
		if (props.onClick) {
			props.onClick();
		}
	};

	const icon = () => {
		if (props.icon === undefined || props.icon === null) {
			return null;
		}
		return <UIIcon icon={props.icon} />;
	};

	return (
		<button type="button" className={className()} onClick={handleOnButtonClickedEvent}>
			{props.children}
			{icon()}
		</button>
	);
};

export default UIButton;
