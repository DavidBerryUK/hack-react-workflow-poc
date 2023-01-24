import IRepositoryEntity from './IRepositoryEntity';

//
// define an entity factory to produce a list of sample items
//
export default interface IEntityFactory<T extends IRepositoryEntity> {
	getDemoSample(): Array<T>;
}
