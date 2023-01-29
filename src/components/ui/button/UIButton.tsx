import { ReactNode } from 'react';

interface IProperties {
	children?: ReactNode;
	onClick?: () => void;
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

	return (
		<button type="button" className={className()} onClick={handleOnButtonClickedEvent}>
			{props.children}
		</button>
	);
};

export default UIButton;
