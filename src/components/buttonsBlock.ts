import { Control } from "./control";

export class ButtonsBlock extends Control {
  shuffleButton: Control;
  shuffleOnClick: () => void;
  pauseButton: Control;
  pauseOnClick: (state: boolean) => void;
  isPaused: boolean;
  resultButton: Control;
  openOnClick: () => void;
  saveButton: Control;
  saveOnClick: () => void;
  loadButton: Control;
  loadOnClick: () => void;
  constructor(parent: HTMLElement, tag: string, className: string, content: string) {
    super(parent, tag, className, content);
    this.isPaused = false;

    this.shuffleButton = new Control(this.el, 'button', 'puzzle__button', 'New Game');
    this.shuffleButton.el.onclick = () => {
      this.pauseReset();
      this.shuffleOnClick();
    }

    this.pauseButton = new Control(this.el, 'button', 'puzzle__button', 'Pause');
    this.pauseButton.el.onclick = () => {
      this.isPaused = this.isPaused ? false : true;
      if (this.isPaused) {
        this.pauseButton.el.textContent = 'Resume';
      } else {
        this.pauseButton.el.textContent = 'Pause';
      }
      this.pauseOnClick(this.isPaused);
    }

    this.saveButton = new Control(this.el, 'button', 'puzzle__button', 'Save');
    this.saveButton.el.onclick = () => {
      this.saveOnClick();
    }

    this.loadButton = new Control(this.el, 'button', 'puzzle__button', 'Load');
    this.loadButton.el.classList.add('puzzle__button-disabled');
    this.loadButton.el.onclick = () => {
      this.loadOnClick();
    }

    this.resultButton = new Control(this.el, 'button', 'puzzle__button', 'Records');
    this.resultButton.el.onclick = () => {
      this.openOnClick();
    }
  }

  clickLoadBtn() {
    this.loadButton.el.click();
  }

  pauseReset() {
    this.isPaused = false;
    this.pauseButton.el.textContent = 'Pause';
  }

  activeLoad() {
    this.loadButton.el.classList.remove('puzzle__button-disabled');
  }
}