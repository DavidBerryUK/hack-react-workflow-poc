import { ReactNode } from 'react';

import IEntity from '../../../repositories/interfaces/IEntity';
import RepositoryBase from '../../../repositories/mockRepositories/RepositoryBase';
import UIList from '../../list/UIList';
import UIListItem from '../../list/UIListItem';

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
					<UIListItem key={item.id} className="ui-entity" selectable>
						<div className="region-key">{item.id}</div>
						<div className="region-body">{props.itemRenderer(item)}</div>
					</UIListItem>
				))}
			</UIList>
		</span>
	);
};

export default UIRepoList;
