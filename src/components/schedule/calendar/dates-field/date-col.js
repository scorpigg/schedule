import { getEmployes, getTasks } from '../../../../api';
import { formatDate } from '../../../../services/formatDate.service';
import { Render } from '../../../Render';
import state from '../../../state';

export class DateCol extends Render {
  constructor(parentNode, dayCounter) {
    super(parentNode, 'div', ['date__col']);
    this.newDate = formatDate(state.today, dayCounter);
    new Render(this.element, 'span', ['date'], `${this.newDate.day}.${this.newDate.month}`);
  }

  async addDateColumn() {
    const employes = await getEmployes();
    const tasks = await getTasks();

    employes.forEach((employee) => {
      const taskCell = new Render(this.element, 'div', ['task-cell']);
      taskCell.element.setAttribute('data-id', `${employee.id}`);
      taskCell.element.setAttribute('data-cell-date', `${this.newDate.fullDate}`);
      tasks.forEach((task) => {
        const taskStartDate = formatDate(new Date(task.planStartDate));
        const taskEndDate = formatDate(new Date(task.planEndDate));
        if (
          taskStartDate.day === this.newDate.day &&
          taskStartDate.month === this.newDate.month &&
          employee.id === task.executor
        ) {
          const taskStart = new Render(taskCell.element, 'div', ['task'], `${task.subject}`);
          new Render(
            taskStart.element,
            'div',
            ['description'],
            `Описание: ${task.description ? task.description : 'нет описания'}`,
          );
        } else if (
          taskEndDate.day === this.newDate.day &&
          taskEndDate.month === this.newDate.month &&
          employee.id === task.executor
        ) {
          new Render(taskCell.element, 'div', ['task', 'task-end'], `${task.subject}`);
        }
      });
    });
  }
}
