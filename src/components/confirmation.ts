import { Control } from "./control";

export class Confirmation extends Control {
  confirm: Control;
  question: Control;
  btnBlock: Control;
  newGameBtn: Control;
  continueBtn: Control;
  continueOnClick: () => void;
  restartOnClick: () => void;
  constructor(parent: HTMLElement, tag: string, className: string, content: string) {
    super(parent, tag, className, content);
    this.el.classList.add('puzzle__confirm-active');
    this.confirm = new Control(this.el, 'div', 'confirm__inner-wrap', '');
    this.question = new Control(this.confirm.el, 'p', 'confirm__question', 'Do you want to continue the last saved game?');
    this.btnBlock = new Control(this.confirm.el, 'div', 'confirm__btn-block', '');
    this.newGameBtn = new Control(this.btnBlock.el, 'button', 'confirm__button', 'New Game');
    this.newGameBtn.el.onclick = () => {
      this.restartOnClick();
    }
    this.continueBtn = new Control(this.btnBlock.el, 'button', 'confirm__button', 'Continue');
    this.continueBtn.el.onclick = () => {
      this.continueOnClick();
    }
  }

  disablePopup() {
    this.el.classList.remove('puzzle__confirm-active');
  }
}