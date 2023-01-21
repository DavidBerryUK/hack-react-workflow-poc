import Connections from "../../connections/Connections";
import IAction from "../interfaces/IAction";

export default class ActionBase implements IAction {
  id: string;
  name: string;
  connections: Connections;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.connections = new Connections();
  }

  execute() {}
}
