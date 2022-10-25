import { Control } from "./control";

export class SizeSelector {
  options: HTMLOptionElement[];
  onChange: (size: string) => void;
  el: HTMLSelectElement;
  current: number;
  constructor(parent: HTMLElement, columnsNum: number) {
    this.current = columnsNum ? columnsNum : 4;
    this.el = document.createElement('select');
    this.el.className = 'puzzle__size-selector';
    parent.append(this.el);
    this.options = [];

    for (let i = 2; i < 9; i++) {
      const option = document.createElement('option');
      option.className = 'size-option';
      option.textContent = `${i}x${i}`;
      option.setAttribute('value', `${i}`);
      if (i === this.current) {
        option.selected = true;
      }
      this.options.push(option);
      this.el.append(option);
    }

    this.el.onchange = () => {
      this.onChange(this.el.value);
    }
  }

  changeValue(size: string) {
    this.el.value = size;
  }
}