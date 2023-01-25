import '../style/Styles.scss';

import { ReactNode } from 'react';

import OrderEntity from '../../../repositories/entities/OrderEntity';
import UserEntity from '../../../repositories/entities/UserEntity';
import VehicleEntity from '../../../repositories/entities/VehicleEntity';
import IEntity from '../../../repositories/interfaces/IEntity';
import RepositoryProvider from '../../../repositories/RepositoryProvider';
import UIEntityListItemOrder from '../entityListItems/UIEntityListItemOrder';
import UIEntityListItemUser from '../entityListItems/UIEntityListItemUser';
import UIEntityListItemVehicle from '../entityListItems/UIEntityListItemVehicle';
import UIRepoList from '../repoList/UIRepoList';

const UIRepositoryViewer: React.FC = () => {
	const requestUserItem = (entity: IEntity): ReactNode => {
		return <UIEntityListItemUser entity={entity as UserEntity} />;
	};

	const requestOrderItem = (entity: IEntity): ReactNode => {
		return <UIEntityListItemOrder entity={entity as OrderEntity} />;
	};

	const requestVehicleItem = (entity: IEntity): ReactNode => {
		return <UIEntityListItemVehicle entity={entity as VehicleEntity} />;
	};

	return (
		<span className="d-flex gap-3">
			<UIRepoList repo={RepositoryProvider.userRepository} itemRenderer={requestUserItem} />
			<UIRepoList repo={RepositoryProvider.orderRepository} itemRenderer={requestOrderItem} />
			<UIRepoList repo={RepositoryProvider.vehicleRepository} itemRenderer={requestVehicleItem} />
		</span>
	);
};

export default UIRepositoryViewer;
