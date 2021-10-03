export const dragAndDrop = (dragFromElement, draggableElements, dragToElements, employes) => {
  const dragStart = function () {
    setTimeout(() => this.classList.add('hide'), 0);
  };

  const dragEnd = function () {
    this.classList.remove('hide');
  };

  const dragOver = function (e) {
    e.preventDefault();
  };

  const backlogOver = function (e) {
    e.preventDefault();
  };

  const dragEnter = function (e) {
    e.preventDefault();
    this.classList.add('hovered');
  };

  const dragLeave = function () {
    this.classList.remove('hovered');
  };

  const dragDrop = function () {
    draggableElements.forEach((draggableElement) => {
      if (this.classList.contains('employee')) {
        dragToElements.forEach((el) => {
          if (
            el.dataset.cellDate === draggableElement.dataset.defaultStartDate &&
            this.dataset.employeeId === el.dataset.id
          ) {
            el.append(draggableElement);
            this.classList.remove('hovered');
            draggableElement.classList.remove('backlog__task');
            draggableElement.classList.add('task');
            draggableElement.classList.add('draggable');
          }
        });
      } else {
        this.append(draggableElement);
        this.classList.remove('hovered');
        draggableElement.classList.remove('backlog__task');
        draggableElement.classList.add('task');
        draggableElement.classList.add('draggable');
      }
    });
  };

  const backlogEnter = function (e) {
    e.preventDefault();
  };

  const backlogDrop = function () {
    draggableElements.forEach((draggableElement) => {
      this.append(draggableElement);
      draggableElement.classList.remove('task');
      draggableElement.classList.remove('draggable');
      draggableElement.classList.add('backlog__task');
    });
  };

  employes.forEach((employee) => {
    employee.addEventListener('dragover', dragOver);
    employee.addEventListener('dragenter', dragEnter);
    employee.addEventListener('dragleave', dragLeave);
    employee.addEventListener('drop', dragDrop);
  });

  dragToElements.forEach((dragToElement) => {
    dragToElement.addEventListener('dragover', dragOver);
    dragToElement.addEventListener('dragenter', dragEnter);
    dragToElement.addEventListener('dragleave', dragLeave);
    dragToElement.addEventListener('drop', dragDrop);
  });

  dragFromElement.addEventListener('dragover', backlogOver);
  dragFromElement.addEventListener('dragenter', backlogEnter);
  dragFromElement.addEventListener('drop', backlogDrop);

  draggableElements.forEach((draggableElement) => {
    draggableElement.addEventListener('dragstart', dragStart);
    draggableElement.addEventListener('dragend', dragEnd);
  });
};
