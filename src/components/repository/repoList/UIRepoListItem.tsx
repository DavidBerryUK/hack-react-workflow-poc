import { ReactNode } from 'react';

import IEntity from '../../../repositories/interfaces/IEntity';
import UIListItem from '../../list/UIListItem';

interface IProperties<T extends IEntity> {
	item: T;
	itemRenderer: (entity: T) => ReactNode;
}

const UIRepoListItem = <T extends IEntity>(props: IProperties<T>) => {
	return (
		<UIListItem className="ui-entity" selectable>
			<div className="region-key">{props.item.id}</div>
			<div className="region-body">{props.itemRenderer(props.item)}</div>
		</UIListItem>
	);
};

export default UIRepoListItem;
