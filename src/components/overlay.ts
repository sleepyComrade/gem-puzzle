import { Control } from "./control";

export class Overlay extends Control {
  onClick: () => void;
  constructor(parent: HTMLElement, tag: string, className: string, content: string) {
    super(parent, tag, className, content);
    this.el.onclick = () => {
      this.onClick();
      this.turnOff();
    }
  }

  turnOn() {
    this.el.classList.add('puzzle__win-wrap-active');
  }

  turnOff() {
    this.el.classList.remove('puzzle__win-wrap-active');
  }
}