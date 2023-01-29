interface IProperties {
	className?: string;
}

const UIIconArrowRight: React.FC<IProperties> = (props) => {
	const className = `bi bi-arrow-right ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconArrowRight;
