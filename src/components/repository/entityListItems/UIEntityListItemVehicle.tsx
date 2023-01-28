import VehicleEntity from '../../../repositories/entities/VehicleEntity';
import UITextKeyValue from '../../ui/text/UITextKeyValue';
import IEntityListItemProperties from './interfaces/IEntityListItem';

const UIEntityListItemVehicle = (props: IEntityListItemProperties<VehicleEntity>) => {
	const hasContract = props.entity.hasMaintenanceContract ? 'yes' : 'no';

	return (
		<div>
			<UITextKeyValue label="Registration" value={`${props.entity.vehicleReg}`} />
			<UITextKeyValue label="Has Maintenance Contract?" value={hasContract} />
		</div>
	);
};

export default UIEntityListItemVehicle;
