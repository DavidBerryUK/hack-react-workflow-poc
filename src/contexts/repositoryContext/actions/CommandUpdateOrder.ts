import OrderEntity from '../../../repositories/entities/OrderEntity';
import { IRepositoryContextDispatchCommand, RepositoryContextProps } from '../RepositoryContext';

export default class CommandUpdateOrder implements IRepositoryContextDispatchCommand {
	private readonly entity: OrderEntity;

	constructor(entity: OrderEntity) {
		this.entity = entity;
	}

	execute(state: RepositoryContextProps): RepositoryContextProps {
		const repository = state.orders.clone();
		repository.save(this.entity);

		return {
			...state,
			orders: repository,
		};
	}
}
