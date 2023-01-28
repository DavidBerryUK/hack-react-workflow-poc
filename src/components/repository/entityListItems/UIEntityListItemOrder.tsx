import OrderEntity from '../../../repositories/entities/OrderEntity';
import UITextCaption from '../../ui/text/UITextCaption';
import UISelectCost from '../../widgets/selectCost/UISelectCost';
import UISelectOrderStatus from '../../widgets/selectOrderStatus/UISelectOrderStatus';
import UISelectVehicleReg from '../../widgets/selectVehicleReg/UISelectVehicleReg';
import IEntityListItemProperties from './interfaces/IEntityListItem';

const UIEntityListItemOrder = (props: IEntityListItemProperties<OrderEntity>) => {
	// const amount = props.entity.cost.toLocaleString('en-US', {
	// 	style: 'currency',
	// 	currency: 'GBP',
	// });

	return (
		<div>
			<UITextCaption>Order Status</UITextCaption>
			<UISelectOrderStatus orderStatus={props.entity.status} />
			<UITextCaption>Vehicle</UITextCaption>
			<UISelectVehicleReg vehicleReg={props.entity.vehicleReg} />
			<UITextCaption>Total Order Value</UITextCaption>
			<UISelectCost cost={props.entity.cost} />
		</div>
	);
};

export default UIEntityListItemOrder;
