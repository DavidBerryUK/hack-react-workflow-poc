interface IProperties {
	className?: string;
}

const UIIconArrowDown: React.FC<IProperties> = (props) => {
	const className = `bi bi-arrow-down ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconArrowDown;
