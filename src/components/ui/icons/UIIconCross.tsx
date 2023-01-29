interface IProperties {
	className?: string;
}

const UIIconCross: React.FC<IProperties> = (props) => {
	const className = `bi bi-x-circle-fill ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconCross;
