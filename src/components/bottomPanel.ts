import { Control } from "./control";
import { Sound } from "./sound";
import { SizeSelector } from "./sizeSelector";

export class BottomPanel extends Control {
  sound: Sound;
  selector: SizeSelector;
  onChange: (size: string) => void;
  constructor(parent: HTMLElement, tag: string, className: string, content: string, columnsNum: number) {
    super(parent, tag, className, content);

    this.selector = new SizeSelector(this.el, columnsNum);
    this.sound = new Sound(this.el, 'div', 'puzzle__sound-wrap', '');
    
    this.selector.onChange = (size) => {
      this.onChange(size);
    }
  }

  changeValue(size: string) {
    this.selector.changeValue(size);
  }

  playAudio() {
    this.sound.playAudio();
  }
}