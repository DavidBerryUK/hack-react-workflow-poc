/* eslint-disable no-console */
import VehicleEntity from '../../../repositories/entities/VehicleEntity';
import EnumVehicleReg from '../../../workflowContext/enums/EnumVehicleReg';
import UITextKeyValue from '../../ui/text/UITextKeyValue';
import IEntityListItemProperties from './interfaces/IEntityListItem';

const UIEntityListItemVehicle = (props: IEntityListItemProperties<VehicleEntity>) => {
	const hasContract = props.entity.hasMaintenanceContract ? 'yes' : 'no';

	return (
		<div>
			<UITextKeyValue label="Registration" value={EnumVehicleReg[props.entity.vehicleReg]} />
			<UITextKeyValue label="Has Maintenance Contract?" value={hasContract} />
		</div>
	);
};

export default UIEntityListItemVehicle;
