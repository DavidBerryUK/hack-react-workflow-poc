import OrderEntity from '../entities/OrderEntity';
import RepositoryBase from './RepositoryBase';

//
// repository of order entities
//
export default class MockRepositoryOrders extends RepositoryBase<OrderEntity> {
	clone(): MockRepositoryOrders {
		const copy = new MockRepositoryOrders();
		copy.title = this.title;
		copy.items = this.items;
		return copy;
	}
}
