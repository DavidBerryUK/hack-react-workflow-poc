import EnumOrderStatus from '../../workflowContext/enums/EnumOrderStatus';
import EnumVehicleReg from '../../workflowContext/enums/EnumVehicleReg';
import OrderEntity from '../entities/OrderEntity';
import IEntityFactory from '../interfaces/IEntityFactory';

export default class EntityFactoryOrders implements IEntityFactory<OrderEntity> {
	// eslint-disable-next-line class-methods-use-this
	title = 'Orders';

	// eslint-disable-next-line class-methods-use-this
	getDemoSample(): Array<OrderEntity> {
		return [
			new OrderEntity('O01', EnumOrderStatus.draft, 50, EnumVehicleReg.ABC123),
			new OrderEntity('O02', EnumOrderStatus.draft, 500, EnumVehicleReg.DEF456),
			new OrderEntity('O03', EnumOrderStatus.rejected, 150, EnumVehicleReg.GHI789),
			new OrderEntity('O04', EnumOrderStatus.queuedForManualApproval, 450, EnumVehicleReg.JKL012),
			new OrderEntity('O05', EnumOrderStatus.approved, 200, EnumVehicleReg.ABC123),
			new OrderEntity('O06', EnumOrderStatus.complete, 250, EnumVehicleReg.GHI789),
		];
	}
}
