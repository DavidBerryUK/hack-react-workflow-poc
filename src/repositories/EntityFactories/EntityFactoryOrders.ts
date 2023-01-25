import EnumOrderStatus from '../../workflowContext/enums/EnumOrderStatus';
import OrderEntity from '../entities/OrderEntity';
import IEntityFactory from '../interfaces/IEntityFactory';

export default class EntityFactoryOrders implements IEntityFactory<OrderEntity> {
	// eslint-disable-next-line class-methods-use-this
	title = 'Orders';

	// eslint-disable-next-line class-methods-use-this
	getDemoSample(): Array<OrderEntity> {
		return [
			new OrderEntity('O01', EnumOrderStatus.draft, 55, 'ABC123'),
			new OrderEntity('O02', EnumOrderStatus.draft, 800, 'DEF456'),
			new OrderEntity('O03', EnumOrderStatus.rejected, 125, 'GHI789'),
			new OrderEntity('O04', EnumOrderStatus.queuedForManualApproval, 450, 'JKL012'),
			new OrderEntity('O05', EnumOrderStatus.approved, 55, 'ABC123'),
			new OrderEntity('O06', EnumOrderStatus.complete, 55, 'GHI789'),
		];
	}
}
