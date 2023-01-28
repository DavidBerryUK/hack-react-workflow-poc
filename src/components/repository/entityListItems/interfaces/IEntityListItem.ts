import IEntity from '../../../../repositories/interfaces/IEntity';

export default interface IEntityListItemProperties<T extends IEntity> {
	entity: T;
	onUpdated: (model: T) => void;
}
