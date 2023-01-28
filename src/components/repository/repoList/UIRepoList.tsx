import { ReactNode } from 'react';

import IEntity from '../../../repositories/interfaces/IEntity';
import RepositoryBase from '../../../repositories/mockRepositories/RepositoryBase';
import UIList from '../../ui/list/UIList';
import UIRepoListItem from './UIRepoListItem';

interface IProperties<T extends IEntity> {
	repo: RepositoryBase<T>;
	itemRenderer: (entity: T) => ReactNode;
}

const UIRepoList = <T extends IEntity>(props: IProperties<T>) => {
	return (
		<span className="ui-repository-viewer">
			<div>{props.repo.title}</div>
			<UIList>
				{props.repo.list().map((item) => (
					<UIRepoListItem key={item.id} item={item} itemRenderer={props.itemRenderer} />
				))}
			</UIList>
		</span>
	);
};

export default UIRepoList;
