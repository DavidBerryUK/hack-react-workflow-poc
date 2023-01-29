interface IProperties {
	className?: string;
}

const UIIconTick: React.FC<IProperties> = (props) => {
	const className = `bi bi-check-circle-fill ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconTick;
