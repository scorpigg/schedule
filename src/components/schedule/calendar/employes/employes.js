import { Render } from "../../../Render";
import { Employee } from "./employee/employee";
import { getEmployes } from '../../../../api';
 
export class Employes extends Render {
  constructor(parentNode) {
    super(parentNode, 'div', ['calendar__employes']);
  }

  async addEmployes() {
    const employes = await getEmployes();
    employes.forEach(employee => {
      const emp = new Employee(this.element, employee.firstName);
      emp.element.setAttribute('data-employee-id', employee.id);
    });
    return this;
  }
}
