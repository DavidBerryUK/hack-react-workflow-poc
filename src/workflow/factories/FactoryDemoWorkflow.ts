import BasicFinish from '../actions/basic/BasicFinish';
import BasicStart from '../actions/basic/BasicStart';
import BranchCanAutoApprove from '../actions/branching/BranchCanAutoApprove';
import ExtSendMailQueuedForApproval from '../actions/external/ExtSendMailQueuedForApproval';
import ExtSendMailYourOrderIsApproved from '../actions/external/ExtSendMailYourOrderIsApproved';
import IAction from '../actions/interfaces/IAction';
import MutateApproveOrder from '../actions/mutations/MutateApproveOrder';
import MutateSetStatusApproved from '../actions/mutations/MutateSetStatusApproved';
import MutateSetStatusQueueManualApproval from '../actions/mutations/MutateSetStatusQueueManualApproval';
import RepoOrderLoad from '../actions/repository/RepoOrderLoad';
import RepoOrderSave from '../actions/repository/RepoOrderSave';
import RepoVehicleLoad from '../actions/repository/RepoVehicleLoad';
import ValidateDoesVehicleHaveRepairContract from '../actions/validation/ValidateDoesVehicleHaveRepairContract';
import ValidateIsGarageUser from '../actions/validation/ValidateIsGarageUser';
import ValidateIsOrderInDraftState from '../actions/validation/ValidateIsOrderInDraftState';
import ConnectionBuilder from '../connections/ConnectionBuilder';

export default class FactoryDemoWorkflow {
	createWorkflow(): Array<IAction> {
		//
		//
		const start = new BasicStart();
		const finish = new BasicFinish();

		//
		// Create Repository Nodes
		//
		const repoOrderLoad = new RepoOrderLoad();
		const repoOrderSaveA = new RepoOrderSave();
		const repoOrderSaveB = new RepoOrderSave();
		const repoVehicleLoad = new RepoVehicleLoad();

		//
		// Create validation nodes
		//
		const validateIsGarageUser = new ValidateIsGarageUser();
		const validateIsOrderInDraftState = new ValidateIsOrderInDraftState();
		const validateDoesVehicleHaveRepairContract = new ValidateDoesVehicleHaveRepairContract();

		//
		// Create branching nodes
		//
		const branchCanAutoApprove = new BranchCanAutoApprove();

		//
		// Create mutation Nodes
		//
		const mutateApproveOrder = new MutateApproveOrder();
		const mutateSetStatusApproved = new MutateSetStatusApproved();
		const mutateSetStatusQueueManualApproval = new MutateSetStatusQueueManualApproval();

		//
		// Create external Nodes
		//
		const extSendMailQueuedForApproval = new ExtSendMailQueuedForApproval();
		const extSendMailYourOrderIsApproved = new ExtSendMailYourOrderIsApproved();

		//
		// Create connections
		//
		ConnectionBuilder.FromTo(start, validateIsGarageUser);

		ConnectionBuilder.FromTo(validateIsGarageUser, validateIsOrderInDraftState);
		ConnectionBuilder.FromTo(validateIsOrderInDraftState, repoOrderLoad);
		ConnectionBuilder.FromTo(repoOrderLoad, repoVehicleLoad);
		ConnectionBuilder.FromTo(repoVehicleLoad, validateDoesVehicleHaveRepairContract);
		ConnectionBuilder.FromTo(validateDoesVehicleHaveRepairContract, branchCanAutoApprove);

		// can auto approve path
		ConnectionBuilder.FromToForPass(branchCanAutoApprove, mutateSetStatusQueueManualApproval);
		ConnectionBuilder.FromToForPass(mutateSetStatusQueueManualApproval, repoOrderSaveA);
		ConnectionBuilder.FromToForPass(repoOrderSaveA, extSendMailQueuedForApproval);
		ConnectionBuilder.FromToForFail(extSendMailQueuedForApproval, finish);

		// manual approval path
		ConnectionBuilder.FromToForFail(branchCanAutoApprove, mutateApproveOrder);
		ConnectionBuilder.FromToForFail(mutateApproveOrder, mutateSetStatusApproved);
		ConnectionBuilder.FromToForFail(mutateSetStatusApproved, repoOrderSaveB);
		ConnectionBuilder.FromToForFail(repoOrderSaveB, extSendMailYourOrderIsApproved);
		ConnectionBuilder.FromToForFail(extSendMailYourOrderIsApproved, finish);

		const nodes = [
			start,
			repoOrderLoad,
			repoOrderSaveA,
			repoOrderSaveB,
			repoVehicleLoad,
			validateIsGarageUser,
			validateIsOrderInDraftState,
			validateDoesVehicleHaveRepairContract,
			branchCanAutoApprove,
			mutateApproveOrder,
			mutateSetStatusApproved,
			mutateSetStatusQueueManualApproval,
			extSendMailQueuedForApproval,
			extSendMailYourOrderIsApproved,
			finish,
		];
		return nodes;
	}
}
