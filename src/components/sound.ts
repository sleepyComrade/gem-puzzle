import { Control } from "./control";
import audio from "../assets/audio/swap.mp3";
import mute from "../assets/svg/volume-mute.svg";
import volume from "../assets/svg/volume-up.svg";

export class Sound extends Control {
  audio: HTMLAudioElement;
  isPlayed: boolean;
  audio2: HTMLAudioElement;
  constructor(parent: HTMLElement, tag: string, className: string, content: string) {
    super(parent, tag, className, content);
    this.isPlayed = true;
    this.audio = new Audio();
    this.audio.src = audio;
    this.audio.volume = 0.6;
    this.audio2 = new Audio();
    this.audio2.src = audio;
    this.audio2.volume = 0.6;

    this.el.style.backgroundImage = `url(${volume})`;
    this.el.onclick = () => {
      this.turnOnOff();
    }
  }

  playAudio() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio2.play();
    }
  }

  turnOnOff() {
    if (this.isPlayed) {
      this.isPlayed = false;
    } else this.isPlayed = true;
    if (!this.isPlayed) {
      this.el.style.backgroundImage = `url(${mute})`;
      this.audio.muted = true;
    } else {
      this.el.style.backgroundImage = `url(${volume})`;
      this.audio.muted = false;
    }
  }
}