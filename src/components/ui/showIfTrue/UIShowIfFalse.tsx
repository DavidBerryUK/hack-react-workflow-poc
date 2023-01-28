import React, { ReactNode } from 'react';

interface IProperties {
	value?: boolean | undefined | null;
	children?: ReactNode;
}

const UIShowIfFalse: React.FC<IProperties> = (props) => {
	if (props.value === undefined || props.value === null || props.value === true || props.children === undefined || props.children === null) {
		return null;
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{props.children}</>;
};

UIShowIfFalse.defaultProps = {
	value: undefined,
	children: undefined,
};

export default UIShowIfFalse;
