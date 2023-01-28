import VehicleEntity from '../entities/VehicleEntity';
import RepositoryBase from './RepositoryBase';

//
// repository of vehicle entities
//
export default class MockRepositoryVehicles extends RepositoryBase<VehicleEntity> {
	clone(): MockRepositoryVehicles {
		const copy = new MockRepositoryVehicles();
		copy.title = this.title;
		copy.items = this.items;
		return copy;
	}
}
