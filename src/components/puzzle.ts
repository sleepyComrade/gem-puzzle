import { Control } from "./control";
import { Tile } from "./tile";
import { WinPopup } from "./winningPopup";
import { tilesData } from "./recordsData";

export class Puzzle extends Control {
  tile: Tile;
  columns: number;
  indexes: number[];
  coordinates: number[][];
  tiles: Tile[];
  shuffledCoordinates: number[][];
  testArray: number[];
  emptyTile: Tile;
  onClick: () => void;
  overlay: Control;
  popup: WinPopup;
  onShow: () => void;
  onPopupClose: () => void;
  isSaved: boolean;
  currentDragInx: number;
  overlayMessage: Control;
  constructor(parent: HTMLElement, tag: string, className: string, content: string, tilesData: tilesData) {
    super(parent, tag, className, content);
    this.isSaved = tilesData.columns ? true : false;
    this.columns = tilesData.columns ? tilesData.columns : 4;
    this.tiles = [];
    this.indexes = [];
    this.overlay = new Control(this.el, 'div', 'puzzle__overlay', '');
    this.overlayMessage = new Control(this.overlay.el, 'p', 'puzzle__overlay-msg', 'It\'s time to break!')
    this.popup = new WinPopup(this.el, 'div', 'puzzle__win-popup', '');
    this.popup.el.onclick = () => {
    if (!this.popup.el.classList.contains('puzzle__win-popup-active')) {
        this.onShow();
      }
    }

    if (this.isSaved) {
      this.columns = tilesData.columns;
      for (let i = 0; i < this.columns * this.columns; i++) {
        this.indexes.push(i);
      }
      this.coordinates = tilesData.coordinates;
      this.testArray = tilesData.test;
      
      this.generateTiles();
      this.setActiveTiles();
    } else {
      this.generateTable();
    }

    this.popup.onClick = () => {
      this.disablePopup();
      this.onPopupClose();
    }
  }

  shuffle() {
    this.shuffledCoordinates = [...this.coordinates];
    this.shuffledCoordinates.shift();
    for (let i = 0; i < 70; i++) {
      const index1 = Math.floor(Math.random() * this.shuffledCoordinates.length);
      const index2 = Math.floor(Math.random() * this.shuffledCoordinates.length);
      let temp = this.shuffledCoordinates[index1];
      this.shuffledCoordinates[index1] = this.shuffledCoordinates[index2];
      this.shuffledCoordinates[index2] = temp;
    }
  }

  shuffleIndexes(indx: number[]) {
    for (let i = indx.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = indx[i];
      indx[i] = indx[j];
      indx[j] = temp;
    }
  }

  checkSolvability() {
    if (this.columns % 2) {
      const inversionsQty = this.countInversions();
      if (inversionsQty % 2) {
        return false;
      } else return true;
    } else {
      const inversionsQty = this.countInversions();
      const blankRow = Math.floor(this.testArray.indexOf(0) / this.columns);
      const sum = inversionsQty + blankRow;
      if (sum % 2) {
        return true;
      } else return false;
    }
  }

  countInversions() {
    let inversionsQty = 0;
    for (let i = 0; i < this.testArray.length; i++) {
      for (let j = i + 1; j < this.testArray.length; j++) {
        if (this.testArray[i] && this.testArray[j]) {
          if (this.testArray[i] > this.testArray[j]) {
            inversionsQty++;
          }
        }
      }
    }
    return inversionsQty;
  }

  generateTable() {
    // initialize or drop all needed arrays
    this.indexes = [];
    if (this.tiles.length) {
      this.tiles.forEach(el => el.destroy());
    }
    this.tiles = [];
    if (this.emptyTile) {
      this.emptyTile.destroy();
    }
    this.emptyTile = null;
    this.coordinates = [[]];
    this.testArray = [];
    // get size of the table
    for (let i = 0; i < this.columns * this.columns; i++) {
      this.indexes.push(i);
    }
    //get coordinates for tiles
    for (let i = 1; i <= this.indexes.length; i++) {
      let x = i % this.columns === 0 ? this.columns - 1 : i % this.columns - 1;
      let y = Math.floor((i - 1) / this.columns);
      this.coordinates.push([x, y]);
    }
    //shuffle coordinates
    this.shuffle();
    // get order of shuffled coordinates
    this.shuffledCoordinates.forEach(el => {
      let index = this.coordinates.indexOf(el) - 1;
      this.testArray.push(index);
    })
    //generate tiles and place them in shuffled order
    this.generateTiles();
    // set active tiles
    this.setActiveTiles();
    // check if the current puzzle is solvable
    let isSolvable = this.checkSolvability();
    if (!isSolvable) {
      this.generateTable();
    }

    let isSolved = this.checkSolved();
    if (isSolved) {
      this.generateTable();
    }
  }

  generateTiles() {
    for (let i = 0; i < this.indexes.length; i++) {
      if (this.testArray[i] !== 0) {
        const tile = new Tile(this.el, 'div', 'puzzle__tile', '', this.testArray[i], this.columns);
        tile.el.classList.add('puzzle__tile-active');
        tile.el.draggable = true;
        tile.el.ondragstart = (e) => {
          setTimeout(() => {
            tile.el.classList.remove('puzzle__tile-active');
          }, 1);
          this.currentDragInx = this.tiles.indexOf(tile);
        }
        tile.el.onmouseup = () => {
          tile.el.classList.add('puzzle__tile-active');
        }
        tile.el.onclick = () => {
          const index = this.tiles.indexOf(tile);
          this.swapTiles(index);
          this.onClick();
          this.setActiveTiles();
        }
        tile.el.style.transform = `translate(calc(100% * ${this.coordinates[i + 1][0]}), calc(100% * ${this.coordinates[i + 1][1]}))`;
        this.tiles.push(tile);
      } else {
        const tile = new Tile(this.el, 'div', 'puzzle__empty-tile', '', this.testArray[i], this.columns);
        tile.el.ondragover = (e) => {
          e.preventDefault();
        }
        tile.el.ondrop = () => {
          const emptyIndex = this.tiles.indexOf(tile);
          const index = this.currentDragInx;
          this.swapTiles(index);
          this.onClick();
          this.setActiveTiles();
        }
        this.emptyTile = tile;
        tile.el.style.transform = `translate(calc(100% * ${this.coordinates[i + 1][0]}), calc(100% * ${this.coordinates[i + 1][1]}))`;
        this.tiles.push(tile);
      }
    }
  }

  setActiveTiles() {
    this.tiles.forEach(el => el.disable());
    let emptyTileIndex = this.tiles.indexOf(this.emptyTile);
    let availableIndexes = [];
     // get index above
    if (Math.floor(emptyTileIndex / this.columns)) {
      availableIndexes.push(emptyTileIndex - this.columns);
    }
    // get index below
    if (Math.ceil((emptyTileIndex + 1) / this.columns) !== this.columns) {
      availableIndexes.push(emptyTileIndex + this.columns);
    }
    // get index on left side
    if (emptyTileIndex % this.columns !== 0) {
      availableIndexes.push(emptyTileIndex - 1);
    }
    // get index on right side
    if ((emptyTileIndex + 1) % this.columns !== 0) {
      availableIndexes.push(emptyTileIndex + 1);
    }

    availableIndexes.forEach(el => {
      this.tiles[el].setActive();
    })
  }

  swapTiles(i: number) {
      let newIndex = i;
      let oldIndex = this.tiles.indexOf(this.emptyTile);
      let temp = this.emptyTile;
      this.tiles[oldIndex] = this.tiles[newIndex];
      this.tiles[newIndex] = temp;
      this.tiles[oldIndex].el.style.transform = `translate(calc(100% * ${this.coordinates[oldIndex + 1][0]}), calc(100% * ${this.coordinates[oldIndex + 1][1]}))`;
      this.tiles[newIndex].el.style.transform = `translate(calc(100% * ${this.coordinates[newIndex + 1][0]}), calc(100% * ${this.coordinates[newIndex + 1][1]}))`;

      let zeroIndex = this.testArray.indexOf(0);
      let temporary = 0;
      this.testArray[zeroIndex] = this.testArray[newIndex];
      this.testArray[newIndex] = temporary;
      
      setTimeout(() => {
        let isSolved = this.checkSolved();
        if (isSolved) {
          this.activatePopup();
        }
      }, 300);
  }

  changeSize(size: number) {
    this.columns = size;
    this.generateTable();
  }

  checkSolved() {
    let isSolved = true;
    const order: number[] = [];
    this.tiles.forEach(el => order.push(el.index));
    if (order[0] !== 1 || order[order.length - 1] !== 0) {
      return;
    }

    order.pop();
    const testArr = [...order];
    order.sort((a, b) => a - b);
    
    testArr.forEach((el,i) => {
      if (el !== order[i]) {
        isSolved = false;
      }
    })

    if (isSolved) {
      return true;
    }
  }

  activateOverlay() {
    this.overlay.el.classList.add('puzzle__overlay-active');
  }

  disableOverlay() {
    this.overlay.el.classList.remove('puzzle__overlay-active');
  }

  activatePopup() {
    this.popup.el.click();
    this.popup.el.classList.add('puzzle__win-popup-active');
  }

  disablePopup() {
    this.popup.el.classList.remove('puzzle__win-popup-active');
  }

  checkActiveOverlay() {
    const isActive = this.overlay.el.classList.contains('puzzle__overlay-active');
    return isActive;
  }

  writeMessage(h: string, m: string, s:string, moves: string) {
    this.popup.writeMessage(h, m, s, moves);
  }

  getSize() {
    return this.columns;
  }

  saveData() {
    return {
      columns: this.columns,
      coordinates: this.coordinates,
      test: this.testArray,
    }
  }

  loadGame(data: tilesData) {
    console.log(data);
    
    this.indexes = [];
    if (this.tiles.length) {
      this.tiles.forEach(el => el.destroy());
    }
    this.tiles = [];
    if (this.emptyTile) {
      this.emptyTile.destroy();
    }
    this.emptyTile = null;
    this.coordinates = [[]];
    this.testArray = [];

    this.columns = data.columns;
      for (let i = 0; i < this.columns * this.columns; i++) {
        this.indexes.push(i);
      }
      
      const coordinates = [...data.coordinates];
      const test = [...data.test];
      
      this.coordinates = coordinates;
      this.testArray = test;
      
      this.generateTiles();
      this.setActiveTiles();
  }
}