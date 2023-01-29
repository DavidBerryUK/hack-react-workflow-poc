interface IProperties {
	className?: string;
}

const UIIconArrowUp: React.FC<IProperties> = (props) => {
	const className = `bi bi-arrow-up ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconArrowUp;
