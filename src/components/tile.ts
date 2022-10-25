import { Control } from "./control";

export class Tile extends Control {
  tile: Control;
  number: Control;
  index: number;
  constructor(parent: HTMLElement, tag: string, className: string, content: string, index: number, columns: number) {
    super(parent, tag, className, content);
    this.index = index;
    this.el.style.width = `calc(100% / ${columns})`;
    this.el.style.height = `calc(100% / ${columns})`;

    this.tile = new Control(this.el, 'div', 'puzzle__inner-tile', '');
    this.number = new Control(this.tile.el, 'p', 'puzzle__number', `${this.index}`);
  }

  setActive() {
    this.tile.el.classList.add('puzzle__active-tile');
  }

  disable() {
    this.tile.el.classList.remove('puzzle__active-tile');
  }
}