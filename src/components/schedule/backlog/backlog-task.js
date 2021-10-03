import { Render } from "../../Render";

export class BacklogTask extends Render {
  constructor(parentNode, taskTitle) {
    super(parentNode, 'div', ['backlog__task']);
    new Render(this.element, 'p', ['task__title'], `${taskTitle}`);
    this.element.setAttribute('draggable', 'true');
  }
}