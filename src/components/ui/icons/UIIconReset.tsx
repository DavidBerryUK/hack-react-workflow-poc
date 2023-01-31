interface IProperties {
	className?: string;
}

const UIIconReset: React.FC<IProperties> = (props) => {
	const className = `bi bi-arrow-clockwise ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconReset;
