import { Render } from '../../Render';
import state from '../../state';
import { Controls } from './controls/controls';
import { DatesField } from './dates-field/dates-field';
import { Employes } from './employes/employes';

export class Calendar extends Render {
  constructor(parentNode) {
    super(parentNode, 'div', ['calendar']);
    this.container = new Render(this.element, 'div', ['calendar__container']);
    this.controls = new Controls(this.container.element);
    this.employes = new Employes(this.container.element).addEmployes();
    this.datesField = new DatesField(this.element).addDates(state.weeks).then((datesField) => {
      this.datesList = datesField.element;
      this.datesCount = this.datesList.querySelectorAll('.date__col').length;
      this.dateColWidth = this.datesList.querySelector('.date__col').offsetWidth;
      this.datesWidth = this.datesList.offsetWidth;
      this.gridGap = +window.getComputedStyle(this.datesList).gridColumnGap.replace('px', '');

      return this.datesList;
    });
    this.slideIndex = 0;
  }

  async getCalendarFields() {
    const dates = await this.datesField;
    const employes = (await this.employes).element;
    return { dates, employes };
  }

  nextDay() {
    const rightBtn = this.controls.rightBtn.element;
    rightBtn.addEventListener('click', async () => {
      this.slideIndex++;
      this.datesList.scrollTo((this.dateColWidth + this.gridGap) * this.slideIndex, 0);
      if (this.slideIndex > this.datesCount - Math.floor(this.datesWidth / this.dateColWidth)) {
        this.slideIndex -= 1;
      }
    });
  }
  prevDay() {
    const leftBtn = this.controls.leftBtn.element;
    leftBtn.addEventListener('click', async () => {
      this.slideIndex--;
      if (this.slideIndex < 0) {
        this.slideIndex = 0;
      }
      this.datesList.scrollTo((this.dateColWidth + this.gridGap) * this.slideIndex, 0);
    });
  }
}
