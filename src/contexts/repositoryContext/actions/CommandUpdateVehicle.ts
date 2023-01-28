import VehicleEntity from '../../../repositories/entities/VehicleEntity';
import { IRepositoryContextDispatchCommand, RepositoryContextProps } from '../RepositoryContext';

export default class CommandUpdateVehicle implements IRepositoryContextDispatchCommand {
	private readonly entity: VehicleEntity;

	constructor(entity: VehicleEntity) {
		this.entity = entity;
	}

	execute(state: RepositoryContextProps): RepositoryContextProps {
		const repository = state.vehicles.clone();
		repository.save(this.entity);

		return {
			...state,
			vehicles: repository,
		};
	}
}
