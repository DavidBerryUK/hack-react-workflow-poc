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
import EnumConnectionType from '../connections/EnumConnectionType';

export default class FactoryDemoWorkflow {
	static createWorkflow(): Workflow {
		//
		//
		const start = new ActionStart();
		const finishA = new ActionFinish();
		const finishB = new ActionFinish();

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
		ConnectionBuilder.addSequenceFlow(start, [
			validateIsGarageUser,
			repoOrderLoad,
			validateIsOrderInDraftState,
			repoVehicleLoad,
			validateDoesVehicleHaveRepairContract,
			branchCanAutoApprove,
		]);

		// can auto approve path
		ConnectionBuilder.addSequenceFlowForResultType(
			branchCanAutoApprove,
			[mutateSetStatusQueueManualApproval, repoOrderSaveA, extSendMailQueuedForApproval, finishA],
			EnumConnectionType.onNo
		);

		// manual approval path
		ConnectionBuilder.addSequenceFlowForResultType(
			branchCanAutoApprove,
			[mutateApproveOrder, repoOrderSaveB, extSendMailYourOrderIsApproved, finishB],
			EnumConnectionType.onYes
		);

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
			finishA,
			finishB,
		];

		const workflow = new Workflow(nodes);
		return workflow;
	}
}
