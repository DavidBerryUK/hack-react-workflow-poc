interface IProperties {
	className?: string;
}

const UIIconQuestion: React.FC<IProperties> = (props) => {
	const className = `bi bi-question-circle-fill ${props.className ?? ''}`;
	return <i className={className} />;
};

export default UIIconQuestion;
