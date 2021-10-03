export class Render {
  constructor(parentNode, tag, classes, content) {
    this.element = document.createElement(tag);
    this.element.classList.add(...classes);
    if (content) {
      this.element.innerText = content;
    }
    if (parentNode) {
      parentNode.appendChild(this.element);
    }
  }
}
