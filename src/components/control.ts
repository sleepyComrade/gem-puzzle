export class Control {
  el: HTMLElement;
  constructor(parent: HTMLElement, tag: string, className: string, content: string) {
    this.el = document.createElement(tag);
    this.el.className = className;
    this.el.textContent = content;
    if (parent) {
      parent.append(this.el);
    }
  }

  destroy() {
    this.el.remove();
  }
}