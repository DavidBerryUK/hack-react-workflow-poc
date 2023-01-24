import VehicleEntity from '../entities/VehicleEntity';
import IEntityFactory from '../interfaces/IEntityFactory';

export default class EntityFactoryVehicles implements IEntityFactory<VehicleEntity> {
	// eslint-disable-next-line class-methods-use-this
	getDemoSample(): Array<VehicleEntity> {
		return [
			new VehicleEntity('V01', 'ABC123', true),
			new VehicleEntity('V02', 'DEF456', true),
			new VehicleEntity('V03', 'GHI789', false),
			new VehicleEntity('V04', 'JKL012', false),
		];
	}
}
