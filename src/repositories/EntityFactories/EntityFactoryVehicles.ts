import EnumVehicleReg from '../../workflowContext/enums/EnumVehicleReg';
import VehicleEntity from '../entities/VehicleEntity';
import IEntityFactory from '../interfaces/IEntityFactory';

export default class EntityFactoryVehicles implements IEntityFactory<VehicleEntity> {
	// eslint-disable-next-line class-methods-use-this
	title = 'Vehicles';

	// eslint-disable-next-line class-methods-use-this
	getDemoSample(): Array<VehicleEntity> {
		return [
			new VehicleEntity('V01', EnumVehicleReg.ABC123, true),
			new VehicleEntity('V02', EnumVehicleReg.DEF456, true),
			new VehicleEntity('V03', EnumVehicleReg.DEF456, false),
			new VehicleEntity('V04', EnumVehicleReg.JKL012, false),
		];
	}
}
