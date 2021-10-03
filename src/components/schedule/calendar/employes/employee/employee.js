import { Render } from "../../../../Render";

export class Employee extends Render {
  constructor(parentNode, userName) {
    super(parentNode, 'div', ['employee'], userName);
  }

  addEmployeeFields() {
    for (let i = 1; i <= 14; i++) {
      new Render(this.element, 'div', ['employee__task'], `${i}`);
    }
  }
}
