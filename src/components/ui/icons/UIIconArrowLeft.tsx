interface IProperties {
	className?: string;
}

const UIIconArrowLeft: React.FC<IProperties> = (props) => {
	const className = `bi bi-arrow-left ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconArrowLeft;
