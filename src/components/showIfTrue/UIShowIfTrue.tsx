import React, { ReactNode } from 'react';

interface IProperties {
	value?: boolean | undefined | null;
	children?: ReactNode;
}

const UIShowIfTrue: React.FC<IProperties> = (props) => {
	if (props.value === undefined || props.value === null || props.value === false || props.children === undefined || props.children === null) {
		return <></>;
	}

	return <>{props.children}</>;
};

UIShowIfTrue.defaultProps = {
	value: undefined,
	children: undefined,
};

export default UIShowIfTrue;
