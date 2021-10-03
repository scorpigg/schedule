import { Render } from '../Render';
import { Backlog } from './backlog/backlog';
import { Calendar } from './calendar/calendar';
import { dragAndDrop } from '../../services/dragAndDrop.service';

export class Schedule extends Render {
  constructor(parentNode) {
    super(parentNode, 'div', ['schedule']);
    this.calendar = new Calendar(this.element);
    this.calendar.nextDay();
    this.calendar.prevDay();

    this.backlog = new Backlog(this.element);

    this.addDragAndDrop();
  }

  async addDragAndDrop() {
    const taskCells = (await this.calendar.getCalendarFields()).dates.querySelectorAll(
      '.task-cell',
    );
    const employes = (await this.calendar.getCalendarFields()).employes.querySelectorAll(
      '.employee',
    );
    const backlog = (await this.backlog.addTasks()).element;
    const backlogTasks = backlog.querySelectorAll('.backlog__task');
    dragAndDrop(backlog, backlogTasks, taskCells, employes);
  }
}
