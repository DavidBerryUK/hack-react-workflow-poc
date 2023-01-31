import './styles/Styles.scss';

import React, { ReactNode, useState } from 'react';

interface IProperties {
	masterTitle: string;
	detailTitle: string;
	masterPanel: ReactNode;
	detailPanel?: ReactNode;
}

const UIMasterDetail: React.FC<IProperties> = (props) => {
	const [isMaster, setIsMaster] = useState(true);

	const handleOnToggleClickEvent = () => {
		setIsMaster(!isMaster);
	};

	const className = `ui-master-detail ${isMaster ? 'view-master' : 'view-detail'}`;

	return (
		<div className={className}>
			{className}
			<div className="ui-header">
				<button type="button" className="ui-back-button" onClick={handleOnToggleClickEvent} />
				<button type="button" onClick={handleOnToggleClickEvent} style={{ position: 'absolute', top: 5, right: 5 }}>
					Toggle
				</button>
			</div>
			<div className="ui-master">
				<div className="panel-title">
					<div>{props.masterTitle}</div>
				</div>
				{props.masterPanel}
			</div>
			<div className="ui-detail">
				<div className="panel-title">
					<div>{props.detailTitle}</div>
				</div>
				{props.detailPanel}
			</div>
		</div>
	);
};

UIMasterDetail.defaultProps = {
	detailPanel: undefined,
};

export default UIMasterDetail;
