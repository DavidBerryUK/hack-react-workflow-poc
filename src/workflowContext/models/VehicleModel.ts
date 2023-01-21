//
// model of a vehicle to be stored in the context
//
export default class VehicleModel {
	readonly vehicleReg: string;
	readonly hasMaintenanceContract: boolean;

	constructor(vehicleReg: string, hasMaintenanceContract: boolean) {
		this.vehicleReg = vehicleReg;
		this.hasMaintenanceContract = hasMaintenanceContract;
	}

	clone(): VehicleModel {
		return new VehicleModel(this.vehicleReg, this.hasMaintenanceContract);
	}
}
