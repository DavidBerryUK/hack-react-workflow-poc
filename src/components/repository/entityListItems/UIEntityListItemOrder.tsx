import OrderEntity from '../../../repositories/entities/OrderEntity';
import EnumOrderStatus from '../../../workflowContext/enums/EnumOrderStatus';
import EnumVehicleReg from '../../../workflowContext/enums/EnumVehicleReg';
import UITextCaption from '../../ui/text/UITextCaption';
import UISelectCost from '../../widgets/selectCost/UISelectCost';
import UISelectOrderStatus from '../../widgets/selectOrderStatus/UISelectOrderStatus';
import UISelectVehicleReg from '../../widgets/selectVehicleReg/UISelectVehicleReg';
import IEntityListItemProperties from './interfaces/IEntityListItem';

const UIEntityListItemOrder = (props: IEntityListItemProperties<OrderEntity>) => {
	const handleOnOrderStatusChangeEvent = (value: EnumOrderStatus) => {
		props.onUpdated(props.entity.cloneWithStatus(value));
	};

	const handleOnVehicleRegChangeEvent = (value: EnumVehicleReg) => {
		props.onUpdated(props.entity.cloneWithVehicle(value));
	};

	const handleOnCostChangeEvent = (value: number) => {
		props.onUpdated(props.entity.cloneWithCost(value));
	};

	return (
		<div>
			<UITextCaption>Order Status</UITextCaption>
			<UISelectOrderStatus orderStatus={props.entity.status} onChange={handleOnOrderStatusChangeEvent} />
			<UITextCaption>Vehicle</UITextCaption>
			<UISelectVehicleReg vehicleReg={props.entity.vehicleReg} onChange={handleOnVehicleRegChangeEvent} />
			<UITextCaption>Total Order Value</UITextCaption>
			<UISelectCost cost={props.entity.cost} onChange={handleOnCostChangeEvent} />
		</div>
	);
};

export default UIEntityListItemOrder;
