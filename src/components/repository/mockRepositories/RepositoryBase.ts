import IEntityFactory from '../interfaces/IEntityFactory';
import IRepositoryEntity from '../interfaces/IRepositoryEntity';

//
// Simple in-memory repository that can be initialised from a factory
//
export default class RepositoryBase<T extends IRepositoryEntity> {
	private items: Map<string, T>;

	constructor(factory: IEntityFactory<T>) {
		const list = factory.getDemoSample();
		this.items = new Map(list.map((key) => [key.id, key] as [string, T]));
	}

	load(key: string): T | undefined {
		return this.items.get(key);
	}

	save(item: T): void {
		this.items.set(item.id, item);
	}

	list(): Array<T> {
		return Array.from(this.items.values());
	}
}
