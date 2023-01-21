import Connections from "../../connections/Connections";

export default interface IAction {
  connections: Connections;
  id: string;
  name: string;
  execute(): void;
}
