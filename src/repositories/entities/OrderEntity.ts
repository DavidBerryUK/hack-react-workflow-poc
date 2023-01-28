import EnumOrderStatus from '../../workflowContext/enums/EnumOrderStatus';
import EnumVehicleReg from '../../workflowContext/enums/EnumVehicleReg';
import IEntity from '../interfaces/IEntity';

export default class OrderEntity implements IEntity {
	readonly id: string;

	readonly status: EnumOrderStatus;

	readonly cost: number;

	readonly vehicleReg: EnumVehicleReg;

	constructor(id: string, status: EnumOrderStatus, cost: number, vehicleReg: EnumVehicleReg) {
		this.id = id;
		this.status = status;
		this.cost = cost;
		this.vehicleReg = vehicleReg;
	}

	clone(): OrderEntity {
		return new OrderEntity(this.id, this.status, this.cost, this.vehicleReg);
	}

	cloneWithVehicle(vehicleReg: EnumVehicleReg): OrderEntity {
		return new OrderEntity(this.id, this.status, this.cost, vehicleReg);
	}

	cloneWithCost(cost: number): OrderEntity {
		return new OrderEntity(this.id, this.status, cost, this.vehicleReg);
	}

	cloneWithStatus(status: EnumOrderStatus): OrderEntity {
		return new OrderEntity(this.id, status, this.cost, this.vehicleReg);
	}
}
