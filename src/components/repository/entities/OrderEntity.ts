import EnumOrderStatus from '../../../workflowContext/enums/EnumOrderStatus';

export default class OrderEntity {
	readonly id: string;

	readonly status: EnumOrderStatus;

	readonly cost: number;

	constructor(id: string, status: EnumOrderStatus, cost: number) {
		this.id = id;
		this.status = status;
		this.cost = cost;
	}

	clone(): OrderEntity {
		return new OrderEntity(this.id, this.status, this.cost);
	}
}
