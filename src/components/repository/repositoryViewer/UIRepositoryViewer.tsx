/* eslint-disable @typescript-eslint/no-unused-vars */
import '../style/Styles.scss';

import { ReactNode, useState } from 'react';

import CommandUpdateOrder from '../../../contexts/repositoryContext/actions/CommandUpdateOrder';
import CommandUpdateUser from '../../../contexts/repositoryContext/actions/CommandUpdateUser';
import CommandUpdateVehicle from '../../../contexts/repositoryContext/actions/CommandUpdateVehicle';
import { useRepositoryContext } from '../../../contexts/repositoryContext/RepositoryContext';
import OrderEntity from '../../../repositories/entities/OrderEntity';
import UserEntity from '../../../repositories/entities/UserEntity';
import VehicleEntity from '../../../repositories/entities/VehicleEntity';
import IEntity from '../../../repositories/interfaces/IEntity';
import KeyValueModel from '../../../utilities/KeyValueModel';
import UISegment from '../../ui/segment/UISegment';
import UIEntityListItemOrder from '../entityListItems/UIEntityListItemOrder';
import UIEntityListItemUser from '../entityListItems/UIEntityListItemUser';
import UIEntityListItemVehicle from '../entityListItems/UIEntityListItemVehicle';
import UIRepoList from '../repoList/UIRepoList';

const UIRepositoryViewer: React.FC = () => {
	const { state, dispatch } = useRepositoryContext();

	const [repoNames] = useState([new KeyValueModel('O', 'Orders'), new KeyValueModel('U', 'Users'), new KeyValueModel('V', 'Vehicles')]);
	const [selectedRepo, setSelectedRepo] = useState(repoNames[0]);
	const handleOnRepoSelected = (value: KeyValueModel) => {
		setSelectedRepo(value);
	};

	const handleOnOrderUpdatedEvent = (order: OrderEntity) => {
		dispatch(new CommandUpdateOrder(order));
	};
	const handleOnUserUpdatedEvent = (user: UserEntity) => {
		dispatch(new CommandUpdateUser(user));
	};
	const handleOnVehicleUpdatedEvent = (vehicle: VehicleEntity) => {
		dispatch(new CommandUpdateVehicle(vehicle));
	};

	const requestUserItem = (entity: IEntity): ReactNode => {
		return <UIEntityListItemUser entity={entity as UserEntity} onUpdated={handleOnUserUpdatedEvent} />;
	};

	const requestOrderItem = (entity: IEntity): ReactNode => {
		return <UIEntityListItemOrder entity={entity as OrderEntity} onUpdated={handleOnOrderUpdatedEvent} />;
	};

	const requestVehicleItem = (entity: IEntity): ReactNode => {
		return <UIEntityListItemVehicle entity={entity as VehicleEntity} onUpdated={handleOnVehicleUpdatedEvent} />;
	};

	return (
		<div>
			<UISegment collection={repoNames} value={selectedRepo} onChange={handleOnRepoSelected} />
			<span className="d-flex gap-3">
				<UIRepoList repo={state.users} itemRenderer={requestUserItem} />
				<UIRepoList repo={state.orders} itemRenderer={requestOrderItem} />
				<UIRepoList repo={state.vehicles} itemRenderer={requestVehicleItem} />
			</span>
		</div>
	);
};

export default UIRepositoryViewer;
