import { Control } from "./control";
import { Record } from "./record";
import { RecordData } from "./recordsData";

export class Records extends Control {
  records: Control;
  title: Control;
  sizes: Control;
  buttons: Control[];
  tables: Control[];
  recordItems: Record[][];
  closeBtn: Control;
  onClick: () => void;
  constructor(parent: HTMLElement, tag: string, className: string, content: string, data: RecordData) {
    super(parent, tag, className, content);
    this.records = new Control(this.el, 'div', 'records__inner-wrap', '');
    this.title = new Control(this.records.el, 'h2', 'records__title', 'Best Time Records');
    this.sizes = new Control(this.records.el, 'div', 'records__buttons-wrap', '');
    this.buttons = [];
    this.tables = [];
    this.recordItems = [[], [], [], [], [], [], []];
    
    for (let i = 2; i < 9; i++) {
      const button = new Control(this.sizes.el, 'button', 'records__button', `${i}x${i}`);
      if (i === 4) {
        button.el.classList.add('records__button-active');
      }
      this.buttons.push(button);
      button.el.onclick = () => {
        let i = this.buttons.indexOf(button);
        this.switchActive(i);
      }
    }

    for (let i = 2; i < 9; i++) {
      const table = new Control(this.records.el, 'div', 'records__block', '');
      if (i === 4) {
        table.el.classList.add('records__block-active');
      }
      this.tables.push(table);
      const head = new Record(table.el, 'div', 'records__record', '');
      head.el.classList.add('records__record-head');
      head.setHeadPlace('Place');
      head.setTime('Time');
      head.setMoves('Moves');
    }

    this.closeBtn = new Control(this.records.el, 'button', 'records__close-btn', 'Close');
    this.closeBtn.el.onclick = () => {
      this.el.classList.remove('puzzle__records-active');
      this.onClick();
    }
    console.log(data);
    
    this.setTables(data);
  }

  setTables(data: any) {
    this.tables.forEach((el, j) => {
      for (let i = 0; i < 10; i++) {
        const record = new Record(el.el, 'div', 'records__record', '');
        record.setPlace(data[j][i].num);
        record.setTime(data[j][i].time);
        record.setMoves(data[j][i].moves);
        this.recordItems[j].push(record);
      }
    })
  }

  destroyAll() {
    this.recordItems.forEach(el => {
      el.forEach(el => {
        el.destroy();
      })
    })
    this.recordItems = [[], [], [], [], [], [], []];
  }

  switchActive(i: number) {
    this.buttons.forEach((el, j) => {
      if (i !== j) {
      el.el.classList.remove('records__button-active');
      this.tables[j].el.classList.remove('records__block-active');
      }
    })
    this.buttons.forEach((el, j) => {
      if (i === j) {
      el.el.classList.add('records__button-active');
      this.tables[j].el.classList.add('records__block-active');
      }
    })
  }

  openPopup() {
    this.el.classList.add('puzzle__records-active');
  }

  activeCurrentTable(i: number) {
    this.buttons[i].el.click();
  }
}