import BasicFinish from '../actions/basic/BasicFinish';
import BasicStart from '../actions/basic/BasicStart';
import BranchCanAutoApprove from '../actions/branching/BranchCanAutoApprove';
import ConnectionBuilder from '../connections/ConnectionBuilder';
import ExtSendMailQueuedForApproval from '../actions/external/ExtSendMailQueuedForApproval';
import ExtSendMailYourOrderIsApproved from '../actions/external/ExtSendMailYourOrderIsApproved';
import MutateApproveOrder from '../actions/mutations/MutateApproveOrder';
import MutateSetStatusApproved from '../actions/mutations/MutateSetStatusApproved';
import MutateSetStatusQueueManualApproval from '../actions/mutations/MutateSetStatusQueueManualApproval';
import RepoOrderLoad from '../actions/repository/RepoOrderLoad';
import RepoOrderSave from '../actions/repository/RepoOrderSave';
import RepoVehicleLoad from '../actions/repository/RepoVehicleLoad';
import ValidateDoesVehicleHaveRepairContract from '../actions/validation/ValidateDoesVehicleHaveRepairContract';
import ValidateIsGarageUser from '../actions/validation/ValidateIsGarageUser';
import ValidateIsOrderInDraftState from '../actions/validation/ValidateIsOrderInDraftState';
import Workflow from '../Workflow';

export default class FactoryDemoWorkflow {
	static createWorkflow(): Workflow {
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
		ConnectionBuilder.FlowFromTo(start, validateIsGarageUser);

		ConnectionBuilder.FlowFromTo(validateIsGarageUser, validateIsOrderInDraftState);
		ConnectionBuilder.FlowFromTo(validateIsOrderInDraftState, repoOrderLoad);
		ConnectionBuilder.FlowFromTo(repoOrderLoad, repoVehicleLoad);
		ConnectionBuilder.FlowFromTo(repoVehicleLoad, validateDoesVehicleHaveRepairContract);
		ConnectionBuilder.FlowFromTo(validateDoesVehicleHaveRepairContract, branchCanAutoApprove);

		// can auto approve path
		ConnectionBuilder.FlowFromToForWhenPass(branchCanAutoApprove, mutateSetStatusQueueManualApproval);
		ConnectionBuilder.FlowFromTo(mutateSetStatusQueueManualApproval, repoOrderSaveA);
		ConnectionBuilder.FlowFromTo(repoOrderSaveA, extSendMailQueuedForApproval);
		ConnectionBuilder.FlowFromTo(extSendMailQueuedForApproval, finish);

		// manual approval path
		ConnectionBuilder.FromFromToWhenFail(branchCanAutoApprove, mutateApproveOrder);
		ConnectionBuilder.FlowFromTo(mutateApproveOrder, mutateSetStatusApproved);
		ConnectionBuilder.FlowFromTo(mutateSetStatusApproved, repoOrderSaveB);
		ConnectionBuilder.FlowFromTo(repoOrderSaveB, extSendMailYourOrderIsApproved);
		ConnectionBuilder.FlowFromTo(extSendMailYourOrderIsApproved, finish);

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

		const workflow = new Workflow(nodes);
		return workflow;
	}
}
