import { ReactNode } from 'react';

import IEntity from '../../../repositories/interfaces/IEntity';
import RepositoryBase from '../../../repositories/mockRepositories/RepositoryBase';
import UIList from '../../ui/list/UIList';
import UIShowIfTrue from '../../ui/showIfTrue/UIShowIfTrue';
import UIRepoListItem from './UIRepoListItem';

interface IProperties<T extends IEntity> {
	repo: RepositoryBase<T>;
	noTitle?: boolean;
	itemRenderer: (entity: T) => ReactNode;
}

const UIRepoList = <T extends IEntity>(props: IProperties<T>) => {
	const showTitle = props.noTitle !== true;

	return (
		<span className="ui-repository-viewer w-100">
			<UIShowIfTrue value={showTitle}>
				<div>{props.repo.title}</div>
			</UIShowIfTrue>
			<UIList>
				{props.repo.list().map((item) => (
					<UIRepoListItem key={item.id} item={item} itemRenderer={props.itemRenderer} />
				))}
			</UIList>
		</span>
	);
};

UIRepoList.defaultProps = {
	noTitle: false,
};

export default UIRepoList;
