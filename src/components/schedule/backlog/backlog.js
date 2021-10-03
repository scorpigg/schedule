import { getTasks } from '../../../api';
import { Render } from '../../Render';
import { BacklogSearch } from './backlog-search';
import { BacklogTask } from './backlog-task';

export class Backlog extends Render {
  constructor(parentNode) {
    super(parentNode, 'div', ['backlog']);
    new Render(this.element, 'h2', ['backlog__title'], 'Backlog');
    new BacklogSearch(this.element);
  }

  async addTasks() {
    const tasks = await getTasks();
    tasks.forEach((task) => {
      if (task.executor === null) {
        const backlogTask = new BacklogTask(this.element, task.subject);
        backlogTask.element.setAttribute('data-default-start-date', task.planStartDate);
        backlogTask.element.setAttribute('data-default-end-date', task.planEndDate);
        new Render(
          backlogTask.element,
          'div',
          ['description'],
          `Описание: ${task.description ? task.description : 'нет описания'}`,
        );
      }
    });
    return this;
  }
}
