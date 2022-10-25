import { Control } from "./control";

export class Record extends Control {
  placeNum: Control;
  time: Control;
  moves: Control;
  constructor(parent: HTMLElement, tag: string, className: string, content: string) {
    super(parent, tag, className, content);
  }

  setPlace(num: number) {
    this.placeNum = new Control(this.el, 'p', 'records__item-info', `#${num}`);
  }

  setHeadPlace(title: string) {
    this.placeNum = new Control(this.el, 'p', 'records__item-info', `#${title}`);
  }

  setTime(time: string) {
    this.time = new Control(this.el, 'p', 'records__item-info', `${time}`);
  }

  setMoves(moves: string) {
    this.moves = new Control(this.el, 'p', 'records__item-info', `${moves}`);
  }
}