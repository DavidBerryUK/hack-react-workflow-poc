import EnumOrderStatus from '../../workflowContext/enums/EnumOrderStatus';
import IEntity from '../interfaces/IEntity';

export default class OrderEntity implements IEntity {
	readonly id: string;

	readonly status: EnumOrderStatus;

	readonly cost: number;

	readonly vehicleReg: string;

	constructor(id: string, status: EnumOrderStatus, cost: number, vehicleReg: string) {
		this.id = id;
		this.status = status;
		this.cost = cost;
		this.vehicleReg = vehicleReg;
	}

	clone(): OrderEntity {
		return new OrderEntity(this.id, this.status, this.cost, this.vehicleReg);
	}
}
