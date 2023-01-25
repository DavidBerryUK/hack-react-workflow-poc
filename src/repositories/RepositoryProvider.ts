import EntityFactoryOrders from './EntityFactories/EntityFactoryOrders';
import EntityFactoryUsers from './EntityFactories/EntityFactoryUsers';
import EntityFactoryVehicles from './EntityFactories/EntityFactoryVehicles';
import MockRepositoryOrders from './mockRepositories/MockRepositoryOrders';
import MockRepositoryUsers from './mockRepositories/MockRepositoryUsers';
import MockRepositoryVehicles from './mockRepositories/MockRepositoryVehicles';

//
// provides repositories to the rest of the application.
// The datasets are initialised with sample data, and the data remain in memory
//
export default class RepositoryProvider {
	private static orderRepo = new MockRepositoryOrders(new EntityFactoryOrders());

	private static userRepo = new MockRepositoryUsers(new EntityFactoryUsers());

	private static vehicleRepo = new MockRepositoryVehicles(new EntityFactoryVehicles());

	static get orderRepository(): MockRepositoryOrders {
		return this.orderRepo;
	}

	static get userRepository(): MockRepositoryUsers {
		return this.userRepo;
	}

	static get vehicleRepository(): MockRepositoryVehicles {
		return this.vehicleRepo;
	}

	static reset() {
		RepositoryProvider.orderRepo = new MockRepositoryOrders(new EntityFactoryOrders());

		RepositoryProvider.userRepo = new MockRepositoryUsers(new EntityFactoryUsers());

		RepositoryProvider.vehicleRepo = new MockRepositoryVehicles(new EntityFactoryVehicles());
	}
}
