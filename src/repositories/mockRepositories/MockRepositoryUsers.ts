import UserEntity from '../entities/UserEntity';
import RepositoryBase from './RepositoryBase';

//
// repository of user entities
//
export default class MockRepositoryUsers extends RepositoryBase<UserEntity> {
	clone(): RepositoryBase<UserEntity> {
		const copy = new MockRepositoryUsers();
		copy.title = this.title;
		copy.items = this.items;
		return copy;
	}
}
