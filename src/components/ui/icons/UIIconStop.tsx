interface IProperties {
	className?: string;
}

const UIIconStop: React.FC<IProperties> = (props) => {
	const className = `bi bi-stop-circle-fill ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconStop;
