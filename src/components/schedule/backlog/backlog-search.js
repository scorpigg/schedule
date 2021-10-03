import { Render } from "../../Render";

export class BacklogSearch extends Render {
  constructor(parentNode) {
    super(parentNode, 'input', ['backlog__search']);
    this.element.setAttribute('placeholder', 'Поиск');
    this.element.setAttribute('type', 'text');
  }
}