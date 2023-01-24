import OrderEntity from '../../components/repository/entities/OrderEntity';
import UserEntity from '../../components/repository/entities/UserEntity';
import VehicleEntity from '../../components/repository/entities/VehicleEntity';

export default class FakeRepo {
	readonly users: Map<string, UserEntity>;

	readonly vehicles: Map<string, VehicleEntity>;

	readonly orders: Map<string, OrderEntity>;

	constructor() {
		this.users = new Map<string, UserEntity>();
		this.vehicles = new Map<string, VehicleEntity>();
		this.orders = new Map<string, OrderEntity>();
	}

	getUser(id: string) {
		return this.users.get(id);
	}

	getOrder(id: string) {
		return this.orders.get(id);
	}

	getVehicle(id: string) {
		return this.vehicles.get(id);
	}
}
