interface IProperties {
	className?: string;
}

const UIIconStart: React.FC<IProperties> = (props) => {
	const className = `bi bi-play-circle-fill ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconStart;
