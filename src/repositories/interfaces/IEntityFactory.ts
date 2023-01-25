import IEntity from './IEntity';

//
// define an entity factory to produce a list of sample items
//
export default interface IEntityFactory<T extends IEntity> {
	title: string;
	getDemoSample(): Array<T>;
}
