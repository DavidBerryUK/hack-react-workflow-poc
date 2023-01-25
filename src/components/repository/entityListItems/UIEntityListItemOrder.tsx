import OrderEntity from '../../../repositories/entities/OrderEntity';
import EnumOrderStatus from '../../../workflowContext/enums/EnumOrderStatus';
import UITextKeyValue from '../../text/UITextKeyValue';
import IEntityListItemProperties from './interfaces/IEntityListItem';

const UIEntityListItemOrder = (props: IEntityListItemProperties<OrderEntity>) => {
	const amount = props.entity.cost.toLocaleString('en-US', {
		style: 'currency',
		currency: 'GBP',
	});

	return (
		<div>
			<UITextKeyValue label="Order Status" value={EnumOrderStatus[props.entity.status]} />
			<UITextKeyValue label="Vehicle" value={props.entity.vehicleReg} />
			<UITextKeyValue label="Total Order Value" value={amount} />
		</div>
	);
};

export default UIEntityListItemOrder;
