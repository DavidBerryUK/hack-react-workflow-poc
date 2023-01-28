import EnumVehicleReg from '../../workflowContext/enums/EnumVehicleReg';
import IEntity from '../interfaces/IEntity';

export default class VehicleEntity implements IEntity {
	readonly id: string;

	readonly vehicleReg: EnumVehicleReg;

	readonly hasMaintenanceContract: boolean;

	constructor(id: string, vehicleReg: EnumVehicleReg, hasMaintenanceContract: boolean) {
		this.id = id;
		this.vehicleReg = vehicleReg;
		this.hasMaintenanceContract = hasMaintenanceContract;
	}

	clone(): VehicleEntity {
		return new VehicleEntity(this.id, this.vehicleReg, this.hasMaintenanceContract);
	}
}
