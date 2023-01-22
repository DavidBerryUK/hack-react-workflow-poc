import ActionFinish from '../actions/basic/ActionFinish';
import ActionStart from '../actions/basic/ActionStart';
import ActionBranchCanAutoApprove from '../actions/branching/ActionBranchCanAutoApprove';
import ConnectionBuilder from '../connections/ConnectionBuilder';
import ActionExtSendMailQueuedForApproval from '../actions/external/ActionExtSendMailQueuedForApproval';
import ActionExtSendMailYourOrderIsApproved from '../actions/external/ActionExtSendMailYourOrderIsApproved';
import ActionMutateApproveOrder from '../actions/mutations/ActionMutateApproveOrder';
import ActionMutateSetStatusApproved from '../actions/mutations/ActionMutateSetStatusApproved';
import ActionMutateSetStatusQueueManualApproval from '../actions/mutations/ActionMutateSetStatusQueueManualApproval';
import ActionRepoOrderLoad from '../actions/repository/ActionRepoOrderLoad';
import RepoOrderSave from '../actions/repository/ActionRepoOrderSave';
import ActionRepoVehicleLoad from '../actions/repository/ActionRepoVehicleLoad';
import ActionValidateDoesVehicleHaveRepairContract from '../actions/validation/ActionValidateDoesVehicleHaveRepairContract';
import ActionValidateIsGarageUser from '../actions/validation/ActionValidateIsGarageUser';
import ActionValidateIsOrderInDraftState from '../actions/validation/ActionValidateIsOrderInDraftState';
import Workflow from '../Workflow';

export default class FactoryDemoWorkflow {
	static createWorkflow(): Workflow {
		//
		//
		const start = new ActionStart();
		const finish = new ActionFinish();

		//
		// Create Repository Nodes
		//
		const repoOrderLoad = new ActionRepoOrderLoad();
		const repoOrderSaveA = new RepoOrderSave();
		const repoOrderSaveB = new RepoOrderSave();
		const repoVehicleLoad = new ActionRepoVehicleLoad();

		//
		// Create validation nodes
		//
		const validateIsGarageUser = new ActionValidateIsGarageUser();
		const validateIsOrderInDraftState = new ActionValidateIsOrderInDraftState();
		const validateDoesVehicleHaveRepairContract = new ActionValidateDoesVehicleHaveRepairContract();

		//
		// Create branching nodes
		//
		const branchCanAutoApprove = new ActionBranchCanAutoApprove();

		//
		// Create mutation Nodes
		//
		const mutateApproveOrder = new ActionMutateApproveOrder();
		const mutateSetStatusApproved = new ActionMutateSetStatusApproved();
		const mutateSetStatusQueueManualApproval = new ActionMutateSetStatusQueueManualApproval();

		//
		// Create external Nodes
		//
		const extSendMailQueuedForApproval = new ActionExtSendMailQueuedForApproval();
		const extSendMailYourOrderIsApproved = new ActionExtSendMailYourOrderIsApproved();

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
