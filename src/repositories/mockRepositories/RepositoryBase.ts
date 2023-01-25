import IEntity from '../interfaces/IEntity';
import IEntityFactory from '../interfaces/IEntityFactory';

//
// Simple in-memory repository that can be initialised from a factory
//
export default class RepositoryBase<T extends IEntity> {
	private items: Map<string, T>;

	title: string;

	constructor(factory: IEntityFactory<T>) {
		const list = factory.getDemoSample();
		this.title = factory.title;
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
