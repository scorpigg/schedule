import { Render } from '../../../Render';
import { DateCol } from './date-col';

export class DatesField extends Render {
  constructor(parentNode) {
    super(parentNode, 'div', ['dates-field']);
  }
//= weeks * 7 -
  async addDates(weeks) {
    for (let i = 0; i <= weeks * 7 - 1; i++) {
      await new DateCol(this.element, i).addDateColumn();
    }
    return this;
  }
}
