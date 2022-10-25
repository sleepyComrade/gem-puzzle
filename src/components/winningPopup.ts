import { Control } from "./control";

export class WinPopup extends Control {
  message: Control;
  closeButton: Control;
  onClick: () => void;
  constructor(parent: HTMLElement, tag: string, className: string, content: string) {
    super(parent, tag, className, content);
    this.closeButton = new Control(this.el, 'button', 'puzzle__popup-close', 'x');
    this.closeButton.el.onclick = () => {
      setTimeout(() => {
      this.onClick();
      }, 1);
    }
    this.message = new Control(this.el, 'p', 'puzzle__win-message', '');
  }

  writeMessage(h: string, m: string, s:string, moves: string) {
    let hours = +h ? `${h}:` : '';
    let time = `${hours}${m}:${s}`;
    this.message.el.textContent = `Hooray! You solved the puzzle in ${time} and ${moves} moves!`;
  }
}