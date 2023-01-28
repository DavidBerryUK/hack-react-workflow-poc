import UserEntity from '../../../repositories/entities/UserEntity';
import { IRepositoryContextDispatchCommand, RepositoryContextProps } from '../RepositoryContext';

export default class CommandUpdateUser implements IRepositoryContextDispatchCommand {
	private readonly entity: UserEntity;

	constructor(entity: UserEntity) {
		this.entity = entity;
	}

	execute(state: RepositoryContextProps): RepositoryContextProps {
		const repository = state.users.clone();
		repository.save(this.entity);

		return {
			...state,
			users: repository,
		};
	}
}
