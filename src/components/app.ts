import { Control } from "./control";
import { ButtonsBlock } from "./buttonsBlock";
import { GameInfo } from "./gameInfo";
import { BottomPanel } from "./bottomPanel";
import { Overlay } from "./overlay";
import { Puzzle } from "./puzzle";
import { Records } from "./records";
import { data, RecordData, lsData } from "./recordsData";
import { Confirmation } from "./confirmation";

export class App {
  el: HTMLDivElement;
  puzzle: Puzzle;
  buttonsBlock: ButtonsBlock;
  gameInfo: GameInfo;
  bottomPanel: BottomPanel;
  overlay: Overlay;
  records: Records;
  data: RecordData[][];
  savedGame: lsData;
  confirm: Confirmation;
  emptyData: lsData;
  constructor(parent: HTMLElement) {
    this.data = data;

    this.el = document.createElement('div');
    this.el.className = 'main-wrap';
    parent.append(this.el);

    if (localStorage.sleepyComradeGem) {
      const saved = JSON.parse(localStorage.getItem('sleepyComradeGem'));
      this.savedGame = saved;
      this.emptyData = saved;
      this.data = saved.records;
    } else {
      const initialData:lsData = {
        info: null,
        records: this.data,
        tiles: {
          columns: 0,
          coordinates: [],
          test: [],
        },
      };
      this.emptyData = initialData;
      this.savedGame = initialData;
    }

    this.confirm = new Confirmation(this.el, 'div', 'puzzle__confirm-wrap', '');
    this.overlay = new Overlay(this.el, 'div', 'puzzle__win-popup-wrap', '');
    this.records = new Records(this.el, 'div', 'puzzle__records-wrap', '', this.data);

    this.buttonsBlock = new ButtonsBlock(this.el, 'div', 'buttons-wrap', '');
    this.gameInfo = new GameInfo(this.el, 'div', 'puzzle__info-wrap', '', this.emptyData.info);
    this.puzzle = new Puzzle(this.el, 'div', 'puzzle-wrap', '', this.emptyData.tiles);
    this.bottomPanel = new BottomPanel(this.el, 'div', 'puzzle__bottom-panel', '', this.emptyData.tiles.columns);

    this.buttonsBlock.loadOnClick = () => {
      this.puzzle.loadGame(this.savedGame.tiles);
      this.gameInfo.setData(this.savedGame.info);
      this.bottomPanel.changeValue(this.savedGame.tiles.columns + '');
    }

    if (localStorage.sleepyComradeGem) {
      this.gameInfo.pauseTimer();
      this.buttonsBlock.activeLoad();
      this.buttonsBlock.clickLoadBtn();
    } else {
      this.confirm.disablePopup();
    }

    this.confirm.continueOnClick = () => {
      this.confirm.disablePopup();
      this.gameInfo.startTimer();
    }

    this.confirm.restartOnClick = () => {
      this.startNewGame();
      this.confirm.disablePopup();
    }

    this.overlay.onClick = () => {
      this.puzzle.disablePopup();
      this.puzzle.generateTable();
      this.gameInfo.resetCounter();
      this.gameInfo.resetTimer();
    }

    this.records.onClick = () => {
      if (!this.puzzle.checkActiveOverlay()) {
        this.gameInfo.resumeTimer();
      }
    }

    this.puzzle.onClick = () => {
      this.gameInfo.countMoves();
      this.bottomPanel.playAudio();
    }

    this.puzzle.onPopupClose = () => {
      setTimeout(() => {
        this.overlay.turnOff();
      }, 1);
      this.puzzle.generateTable();
      this.gameInfo.resetCounter();
      setTimeout(() => {
        this.gameInfo.resetTimer();
      }, 1);
    }

    this.buttonsBlock.shuffleOnClick = () => {
      this.startNewGame();
    }

    this.buttonsBlock.pauseOnClick = (state) => {
      if (!state) {
        this.puzzle.disableOverlay();
        this.gameInfo.resumeTimer();
      } else {
        this.puzzle.activateOverlay();
        this.gameInfo.pauseTimer();
      }
    }

    this.buttonsBlock.saveOnClick = () => {
      this.saveGame();
      this.buttonsBlock.activeLoad();
      this.buttonsBlock.clickLoadBtn();
    }

    this.buttonsBlock.openOnClick = () => {
      this.records.openPopup();
      const size = this.puzzle.getSize();
      this.records.activeCurrentTable(size - 2);
      this.gameInfo.pauseTimer();
    }

    this.bottomPanel.onChange = (size) => {
      this.puzzle.changeSize(+size);
      this.gameInfo.resetCounter();
      this.gameInfo.resetTimer();
      this.buttonsBlock.pauseReset();
      this.puzzle.disableOverlay();
    }

    this.puzzle.onShow = () => {
      let time = this.gameInfo.getInfo();
      this.overlay.turnOn();
      this.gameInfo.pauseTimer();
      this.puzzle.writeMessage(time[0], time[1], time[2], time[3]);
      let blockKey = this.puzzle.columns;
      const timeArr: string[]= [];
      const movesArr: string[] = [];
      this.data[blockKey - 2].forEach((el: RecordData) => {
        timeArr.push(el.time);
        movesArr.push(el.moves);
      });
      const testArr = timeArr.map(el => {
        if (el !== '//' && el) {
          let arr = el.split(':');
          return arr;
        }
      })
      
      if (!testArr[9] ||
          +testArr[9][0] > +time[0] ||
          +testArr[9][1] > +time[1] && +testArr[9][0] >= +time[0] ||
          +testArr[9][2] > +time[2] && +testArr[9][1] >= +time[1] && +testArr[9][0] >= +time[0]) {
        testArr[9] = [time[0], time[1], time[2]];
        movesArr[9] = time[3];
      }
      for (let i = 9; i > 0; i--) {
        if (!testArr[i - 1] ||
            +testArr[i - 1][0] > +testArr[i][0] ||
            +testArr[i - 1][1] > +testArr[i][1] && +testArr[i - 1][0] >= +testArr[i][0] ||
            +testArr[i - 1][2] > +testArr[i][2] && +testArr[i - 1][1] >= +testArr[i][1] && +testArr[i - 1][0] >= +testArr[i][0]) {
          let temp = testArr[i];
          testArr[i] = testArr[i - 1];
          testArr[i - 1] = temp;

          let tempMoves = movesArr[i];
          movesArr[i] = movesArr[i - 1];
          movesArr[i - 1] = tempMoves; 
        }
      }

      const newTimeArr = testArr.map(el => {
        if (el) {
          return el.join(':');
        }
      });
      newTimeArr.forEach((el, i) => {
        this.data[blockKey - 2][i].time = el ? el : '//';
        this.data[blockKey - 2][i].moves = movesArr[i];
      })

      this.records.destroyAll();
      this.records.setTables(this.data);
    }
  }

  saveGame() {
    this.savedGame.records = this.data;
    this.savedGame.tiles = this.puzzle.saveData();
    this.savedGame.info = this.gameInfo.getInfo();
    localStorage.setItem('sleepyComradeGem', JSON.stringify(this.savedGame));
  }

  startNewGame() {
    this.puzzle.generateTable();
    this.gameInfo.resetCounter();
    this.gameInfo.resetTimer();
    this.puzzle.disableOverlay();
  }
}