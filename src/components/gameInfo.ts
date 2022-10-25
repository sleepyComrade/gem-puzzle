import { Control } from "./control";

export class GameInfo extends Control {
  time: Control;
  hours: Control;
  minutes: Control;
  seconds: Control;
  moves: Control;
  movesQty: Control;
  firstSep: Control;
  secondSep: Control;
  timer: NodeJS.Timer;
  constructor(parent: HTMLElement, tag: string, className: string, content: string, data: string[]) {
    super(parent, tag, className, content);

    this.time = new Control(this.el, 'div', 'puzzle__time', '');

    this.hours = new Control(this.time.el, 'span', 'puzzle__hours', '00');
    this.firstSep = new Control(this.time.el, 'span', 'puzzle__hours', ':');
    this.minutes = new Control(this.time.el, 'span', 'puzzle__minutes', '00');
    this.secondSep = new Control(this.time.el, 'span', 'puzzle__hours', ':');
    this.seconds = new Control(this.time.el, 'span', 'puzzle__seconds', '00');

    this.moves = new Control(this.el, 'p', 'puzzle__moves', 'Moves:  ');
    this.movesQty = new Control(this.moves.el, 'span', 'puzzle__moves-qty', '0');

    if (data) {
      this.setData(data);
    }

    this.startTimer();
  }

  countMoves() {
    const n = +this.movesQty.el.textContent;
    this.movesQty.el.textContent = n + 1 + '';
  }

  resetCounter() {
    this.movesQty.el.textContent = '0';
  }

  startTimer() {
    this.timer = setInterval(() => {
      let seconds = +this.seconds.el.textContent;
        let sec = seconds + 1 >= 10 ? seconds + 1 + '' : `0${seconds + 1}`;

        let minutes = +this.minutes.el.textContent;
        let min;

        let hours = +this.hours.el.textContent;
        let h;

        if (+sec > 59) {
          sec = '00';
          min = minutes + 1 >= 10 ? minutes + 1 + '' : `0${minutes + 1}`;
          if (+min > 59) {
            min = '00';
            h = hours + 1 >= 10 ? hours + 1 + '' : `0${hours + 1}`;
          }
        }
        this.seconds.el.textContent = sec;
        if (min) {
          this.minutes.el.textContent = min;
        }
        if (h) {
          this.hours.el.textContent = h;
        }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.timer);
    this.seconds.el.textContent = '00';
    this.minutes.el.textContent = '00';
    this.hours.el.textContent = '00';
    this.startTimer();
  }

  pauseTimer() {
    clearInterval(this.timer);
  }

  resumeTimer() {
    this.startTimer();
  }

  setData(data: string[]) {
    this.seconds.el.textContent = data[2];
    this.minutes.el.textContent = data[1];
    this.hours.el.textContent = data[0];
    this.movesQty.el.textContent = data[3];
  }

  getInfo() {
    let h = this.hours.el.textContent;
    let m = this.minutes.el.textContent;
    let s = this.seconds.el.textContent;
    let moves = this.movesQty.el.textContent;
    return [h, m, s, moves];
  }
}