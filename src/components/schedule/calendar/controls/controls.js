import { Render } from '../../../Render';

export class Controls extends Render {
  constructor(parentNode) {
    super(parentNode, 'div', ['calendar__controls']);
    this.leftBtn = new Render(this.element, 'button', ['control-btn'], 'Left');
    this.rightBtn = new Render(this.element, 'button', ['control-btn'], 'Right');
  }
}