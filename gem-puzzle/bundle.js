(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var o=t.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var n=o.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();var e,o=function(){function t(t,e,o,n){this.el=document.createElement(e),this.el.className=o,this.el.textContent=n,t&&t.append(this.el)}return t.prototype.destroy=function(){this.el.remove()},t}(),n=(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),i=function(t){function e(e,n,i,s){var r=t.call(this,e,n,i,s)||this;return r.isPaused=!1,r.shuffleButton=new o(r.el,"button","puzzle__button","New Game"),r.shuffleButton.el.onclick=function(){r.pauseReset(),r.shuffleOnClick()},r.pauseButton=new o(r.el,"button","puzzle__button","Pause"),r.pauseButton.el.onclick=function(){r.isPaused=!r.isPaused,r.isPaused?r.pauseButton.el.textContent="Resume":r.pauseButton.el.textContent="Pause",r.pauseOnClick(r.isPaused)},r.saveButton=new o(r.el,"button","puzzle__button","Save"),r.saveButton.el.onclick=function(){r.saveOnClick()},r.loadButton=new o(r.el,"button","puzzle__button","Load"),r.loadButton.el.classList.add("puzzle__button-disabled"),r.loadButton.el.onclick=function(){r.loadOnClick()},r.resultButton=new o(r.el,"button","puzzle__button","Records"),r.resultButton.el.onclick=function(){r.openOnClick()},r}return n(e,t),e.prototype.clickLoadBtn=function(){this.loadButton.el.click()},e.prototype.pauseReset=function(){this.isPaused=!1,this.pauseButton.el.textContent="Pause"},e.prototype.activeLoad=function(){this.loadButton.el.classList.remove("puzzle__button-disabled")},e}(o),s=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=function(t){function e(e,n,i,s,r){var c=t.call(this,e,n,i,s)||this;return c.time=new o(c.el,"div","puzzle__time",""),c.hours=new o(c.time.el,"span","puzzle__hours","00"),c.firstSep=new o(c.time.el,"span","puzzle__hours",":"),c.minutes=new o(c.time.el,"span","puzzle__minutes","00"),c.secondSep=new o(c.time.el,"span","puzzle__hours",":"),c.seconds=new o(c.time.el,"span","puzzle__seconds","00"),c.moves=new o(c.el,"p","puzzle__moves","Moves:  "),c.movesQty=new o(c.moves.el,"span","puzzle__moves-qty","0"),r&&c.setData(r),c.startTimer(),c}return s(e,t),e.prototype.countMoves=function(){var t=+this.movesQty.el.textContent;this.movesQty.el.textContent=t+1+""},e.prototype.resetCounter=function(){this.movesQty.el.textContent="0"},e.prototype.startTimer=function(){var t=this;this.timer=setInterval((function(){var e,o,n=+t.seconds.el.textContent,i=n+1>=10?n+1+"":"0".concat(n+1),s=+t.minutes.el.textContent,r=+t.hours.el.textContent;+i>59&&(i="00",+(e=s+1>=10?s+1+"":"0".concat(s+1))>59&&(e="00",o=r+1>=10?r+1+"":"0".concat(r+1))),t.seconds.el.textContent=i,e&&(t.minutes.el.textContent=e),o&&(t.hours.el.textContent=o)}),1e3)},e.prototype.resetTimer=function(){clearInterval(this.timer),this.seconds.el.textContent="00",this.minutes.el.textContent="00",this.hours.el.textContent="00",this.startTimer()},e.prototype.pauseTimer=function(){clearInterval(this.timer)},e.prototype.resumeTimer=function(){this.startTimer()},e.prototype.setData=function(t){this.seconds.el.textContent=t[2],this.minutes.el.textContent=t[1],this.hours.el.textContent=t[0],this.movesQty.el.textContent=t[3]},e.prototype.getInfo=function(){return[this.hours.el.textContent,this.minutes.el.textContent,this.seconds.el.textContent,this.movesQty.el.textContent]},e}(o);const c=t.p+"0c1d6ef239b07a2c704a.mp3",u="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktdm9sdW1lLXVwIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGQ9Ik0xMS41MzYgMTQuMDFBOC40NzMgOC40NzMgMCAwIDAgMTQuMDI2IDhhOC40NzMgOC40NzMgMCAwIDAtMi40OS02LjAxbC0uNzA4LjcwN0E3LjQ3NiA3LjQ3NiAwIDAgMSAxMy4wMjUgOGMwIDIuMDcxLS44NCAzLjk0Ni0yLjE5NyA1LjMwM2wuNzA4LjcwN3oiLz4KICA8cGF0aCBkPSJNMTAuMTIxIDEyLjU5NkE2LjQ4IDYuNDggMCAwIDAgMTIuMDI1IDhhNi40OCA2LjQ4IDAgMCAwLTEuOTA0LTQuNTk2bC0uNzA3LjcwN0E1LjQ4MyA1LjQ4MyAwIDAgMSAxMS4wMjUgOGE1LjQ4MyA1LjQ4MyAwIDAgMS0xLjYxIDMuODlsLjcwNi43MDZ6Ii8+CiAgPHBhdGggZD0iTTEwLjAyNSA4YTQuNDg2IDQuNDg2IDAgMCAxLTEuMzE4IDMuMTgyTDggMTAuNDc1QTMuNDg5IDMuNDg5IDAgMCAwIDkuMDI1IDhjMC0uOTY2LS4zOTItMS44NDEtMS4wMjUtMi40NzVsLjcwNy0uNzA3QTQuNDg2IDQuNDg2IDAgMCAxIDEwLjAyNSA4ek03IDRhLjUuNSAwIDAgMC0uODEyLS4zOUwzLjgyNSA1LjVIMS41QS41LjUgMCAwIDAgMSA2djRhLjUuNSAwIDAgMCAuNS41aDIuMzI1bDIuMzYzIDEuODlBLjUuNSAwIDAgMCA3IDEyVjR6TTQuMzEyIDYuMzkgNiA1LjA0djUuOTJMNC4zMTIgOS42MUEuNS41IDAgMCAwIDQgOS41SDJ2LTNoMmEuNS41IDAgMCAwIC4zMTItLjExeiIvPgo8L3N2Zz4=";for(var a=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),l=function(t){function e(e,o,n,i){var s=t.call(this,e,o,n,i)||this;return s.isPlayed=!0,s.audio=new Audio,s.audio.src=c,s.audio.volume=.6,s.audio2=new Audio,s.audio2.src=c,s.audio2.volume=.6,s.el.style.backgroundImage="url(".concat(u,")"),s.el.onclick=function(){s.turnOnOff()},s}return a(e,t),e.prototype.playAudio=function(){this.audio.paused?this.audio.play():this.audio2.play()},e.prototype.turnOnOff=function(){this.isPlayed?this.isPlayed=!1:this.isPlayed=!0,this.isPlayed?(this.el.style.backgroundImage="url(".concat(u,")"),this.audio.muted=!1):(this.el.style.backgroundImage="url(".concat("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktdm9sdW1lLW11dGUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTYuNzE3IDMuNTVBLjUuNSAwIDAgMSA3IDR2OGEuNS41IDAgMCAxLS44MTIuMzlMMy44MjUgMTAuNUgxLjVBLjUuNSAwIDAgMSAxIDEwVjZhLjUuNSAwIDAgMSAuNS0uNWgyLjMyNWwyLjM2My0xLjg5YS41LjUgMCAwIDEgLjUyOS0uMDZ6TTYgNS4wNCA0LjMxMiA2LjM5QS41LjUgMCAwIDEgNCA2LjVIMnYzaDJhLjUuNSAwIDAgMSAuMzEyLjExTDYgMTAuOTZWNS4wNHptNy44NTQuNjA2YS41LjUgMCAwIDEgMCAuNzA4TDEyLjIwNyA4bDEuNjQ3IDEuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhMMTEuNSA4LjcwN2wtMS42NDYgMS42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTAuNzkzIDggOS4xNDYgNi4zNTRhLjUuNSAwIDEgMSAuNzA4LS43MDhMMTEuNSA3LjI5M2wxLjY0Ni0xLjY0N2EuNS41IDAgMCAxIC43MDggMHoiLz4KPC9zdmc+",")"),this.audio.muted=!0)},e}(o),p=function(){function t(t,e){var o=this;this.current=e||4,this.el=document.createElement("select"),this.el.className="puzzle__size-selector",t.append(this.el),this.options=[];for(var n=2;n<9;n++){var i=document.createElement("option");i.className="size-option",i.textContent="".concat(n,"x").concat(n),i.setAttribute("value","".concat(n)),n===this.current&&(i.selected=!0),this.options.push(i),this.el.append(i)}this.el.onchange=function(){o.onChange(o.el.value)}}return t.prototype.changeValue=function(t){this.el.value=t},t}(),h=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),f=function(t){function e(e,o,n,i,s){var r=t.call(this,e,o,n,i)||this;return r.selector=new p(r.el,s),r.sound=new l(r.el,"div","puzzle__sound-wrap",""),r.selector.onChange=function(t){r.onChange(t)},r}return h(e,t),e.prototype.changeValue=function(t){this.selector.changeValue(t)},e.prototype.playAudio=function(){this.sound.playAudio()},e}(o),d=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),y=function(t){function e(e,o,n,i){var s=t.call(this,e,o,n,i)||this;return s.el.onclick=function(){s.onClick(),s.turnOff()},s}return d(e,t),e.prototype.turnOn=function(){this.el.classList.add("puzzle__win-wrap-active")},e.prototype.turnOff=function(){this.el.classList.remove("puzzle__win-wrap-active")},e}(o),m=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),v=function(t){function e(e,n,i,s,r,c){var u=t.call(this,e,n,i,s)||this;return u.index=r,u.el.style.width="calc(100% / ".concat(c,")"),u.el.style.height="calc(100% / ".concat(c,")"),u.tile=new o(u.el,"div","puzzle__inner-tile",""),u.number=new o(u.tile.el,"p","puzzle__number","".concat(u.index)),u}return m(e,t),e.prototype.setActive=function(){this.tile.el.classList.add("puzzle__active-tile")},e.prototype.disable=function(){this.tile.el.classList.remove("puzzle__active-tile")},e}(o),_=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),g=function(t){function e(e,n,i,s){var r=t.call(this,e,n,i,s)||this;return r.closeButton=new o(r.el,"button","puzzle__popup-close","x"),r.closeButton.el.onclick=function(){setTimeout((function(){r.onClick()}),1)},r.message=new o(r.el,"p","puzzle__win-message",""),r}return _(e,t),e.prototype.writeMessage=function(t,e,o,n){var i=+t?"".concat(t,":"):"",s="".concat(i).concat(e,":").concat(o);this.message.el.textContent="Hooray! You solved the puzzle in ".concat(s," and ").concat(n," moves!")},e}(o),w=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),z=function(t,e,o){if(o||2===arguments.length)for(var n,i=0,s=e.length;i<s;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))},A=function(t){function e(e,n,i,s,r){var c=t.call(this,e,n,i,s)||this;if(c.isSaved=!!r.columns,c.columns=r.columns?r.columns:4,c.tiles=[],c.indexes=[],c.overlay=new o(c.el,"div","puzzle__overlay",""),c.overlayMessage=new o(c.overlay.el,"p","puzzle__overlay-msg","It's time to break!"),c.popup=new g(c.el,"div","puzzle__win-popup",""),c.popup.el.onclick=function(){c.popup.el.classList.contains("puzzle__win-popup-active")||c.onShow()},c.isSaved){c.columns=r.columns;for(var u=0;u<c.columns*c.columns;u++)c.indexes.push(u);c.coordinates=r.coordinates,c.testArray=r.test,c.generateTiles(),c.setActiveTiles()}else c.generateTable();return c.popup.onClick=function(){c.disablePopup(),c.onPopupClose()},c}return w(e,t),e.prototype.shuffle=function(){this.shuffledCoordinates=z([],this.coordinates,!0),this.shuffledCoordinates.shift();for(var t=0;t<70;t++){var e=Math.floor(Math.random()*this.shuffledCoordinates.length),o=Math.floor(Math.random()*this.shuffledCoordinates.length),n=this.shuffledCoordinates[e];this.shuffledCoordinates[e]=this.shuffledCoordinates[o],this.shuffledCoordinates[o]=n}},e.prototype.shuffleIndexes=function(t){for(var e=t.length-1;e>0;e--){var o=Math.floor(Math.random()*e),n=t[e];t[e]=t[o],t[o]=n}},e.prototype.checkSolvability=function(){return this.columns%2?!(this.countInversions()%2):!!((this.countInversions()+Math.floor(this.testArray.indexOf(0)/this.columns))%2)},e.prototype.countInversions=function(){for(var t=0,e=0;e<this.testArray.length;e++)for(var o=e+1;o<this.testArray.length;o++)this.testArray[e]&&this.testArray[o]&&this.testArray[e]>this.testArray[o]&&t++;return t},e.prototype.generateTable=function(){var t=this;this.indexes=[],this.tiles.length&&this.tiles.forEach((function(t){return t.destroy()})),this.tiles=[],this.emptyTile&&this.emptyTile.destroy(),this.emptyTile=null,this.coordinates=[[]],this.testArray=[];for(var e=0;e<this.columns*this.columns;e++)this.indexes.push(e);for(e=1;e<=this.indexes.length;e++){var o=e%this.columns==0?this.columns-1:e%this.columns-1,n=Math.floor((e-1)/this.columns);this.coordinates.push([o,n])}this.shuffle(),this.shuffledCoordinates.forEach((function(e){var o=t.coordinates.indexOf(e)-1;t.testArray.push(o)})),this.generateTiles(),this.setActiveTiles(),this.checkSolvability()||this.generateTable(),this.checkSolved()&&this.generateTable()},e.prototype.generateTiles=function(){for(var t=this,e=function(e){if(0!==o.testArray[e]){var n=new v(o.el,"div","puzzle__tile","",o.testArray[e],o.columns);n.el.classList.add("puzzle__tile-active"),n.el.draggable=!0,n.el.ondragstart=function(e){setTimeout((function(){n.el.classList.remove("puzzle__tile-active")}),1),t.currentDragInx=t.tiles.indexOf(n)},n.el.onmouseup=function(){n.el.classList.add("puzzle__tile-active")},n.el.onclick=function(){var e=t.tiles.indexOf(n);t.swapTiles(e),t.onClick(),t.setActiveTiles()},n.el.style.transform="translate(calc(100% * ".concat(o.coordinates[e+1][0],"), calc(100% * ").concat(o.coordinates[e+1][1],"))"),o.tiles.push(n)}else{var i=new v(o.el,"div","puzzle__empty-tile","",o.testArray[e],o.columns);i.el.ondragover=function(t){t.preventDefault()},i.el.ondrop=function(){t.tiles.indexOf(i);var e=t.currentDragInx;t.swapTiles(e),t.onClick(),t.setActiveTiles()},o.emptyTile=i,i.el.style.transform="translate(calc(100% * ".concat(o.coordinates[e+1][0],"), calc(100% * ").concat(o.coordinates[e+1][1],"))"),o.tiles.push(i)}},o=this,n=0;n<this.indexes.length;n++)e(n)},e.prototype.setActiveTiles=function(){var t=this;this.tiles.forEach((function(t){return t.disable()}));var e=this.tiles.indexOf(this.emptyTile),o=[];Math.floor(e/this.columns)&&o.push(e-this.columns),Math.ceil((e+1)/this.columns)!==this.columns&&o.push(e+this.columns),e%this.columns!=0&&o.push(e-1),(e+1)%this.columns!=0&&o.push(e+1),o.forEach((function(e){t.tiles[e].setActive()}))},e.prototype.swapTiles=function(t){var e=this,o=t,n=this.tiles.indexOf(this.emptyTile),i=this.emptyTile;this.tiles[n]=this.tiles[o],this.tiles[o]=i,this.tiles[n].el.style.transform="translate(calc(100% * ".concat(this.coordinates[n+1][0],"), calc(100% * ").concat(this.coordinates[n+1][1],"))"),this.tiles[o].el.style.transform="translate(calc(100% * ".concat(this.coordinates[o+1][0],"), calc(100% * ").concat(this.coordinates[o+1][1],"))");var s=this.testArray.indexOf(0);this.testArray[s]=this.testArray[o],this.testArray[o]=0,setTimeout((function(){e.checkSolved()&&e.activatePopup()}),300)},e.prototype.changeSize=function(t){this.columns=t,this.generateTable()},e.prototype.checkSolved=function(){var t=!0,e=[];if(this.tiles.forEach((function(t){return e.push(t.index)})),1===e[0]&&0===e[e.length-1]){e.pop();var o=z([],e,!0);return e.sort((function(t,e){return t-e})),o.forEach((function(o,n){o!==e[n]&&(t=!1)})),!!t||void 0}},e.prototype.activateOverlay=function(){this.overlay.el.classList.add("puzzle__overlay-active")},e.prototype.disableOverlay=function(){this.overlay.el.classList.remove("puzzle__overlay-active")},e.prototype.activatePopup=function(){this.popup.el.click(),this.popup.el.classList.add("puzzle__win-popup-active")},e.prototype.disablePopup=function(){this.popup.el.classList.remove("puzzle__win-popup-active")},e.prototype.checkActiveOverlay=function(){return this.overlay.el.classList.contains("puzzle__overlay-active")},e.prototype.writeMessage=function(t,e,o,n){this.popup.writeMessage(t,e,o,n)},e.prototype.getSize=function(){return this.columns},e.prototype.saveData=function(){return{columns:this.columns,coordinates:this.coordinates,test:this.testArray}},e.prototype.loadGame=function(t){this.indexes=[],this.tiles.length&&this.tiles.forEach((function(t){return t.destroy()})),this.tiles=[],this.emptyTile&&this.emptyTile.destroy(),this.emptyTile=null,this.coordinates=[[]],this.testArray=[],this.columns=t.columns;for(var e=0;e<this.columns*this.columns;e++)this.indexes.push(e);var o=z([],t.coordinates,!0),n=z([],t.test,!0);this.coordinates=o,this.testArray=n,this.generateTiles(),this.setActiveTiles()},e}(o),b=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),M=function(t){function e(e,o,n,i){return t.call(this,e,o,n,i)||this}return b(e,t),e.prototype.setPlace=function(t){this.placeNum=new o(this.el,"p","records__item-info","#".concat(t))},e.prototype.setHeadPlace=function(t){this.placeNum=new o(this.el,"p","records__item-info","#".concat(t))},e.prototype.setTime=function(t){this.time=new o(this.el,"p","records__item-info","".concat(t))},e.prototype.setMoves=function(t){this.moves=new o(this.el,"p","records__item-info","".concat(t))},e}(o),I=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),C=function(t){function e(e,n,i,s,r){var c=t.call(this,e,n,i,s)||this;c.records=new o(c.el,"div","records__inner-wrap",""),c.title=new o(c.records.el,"h2","records__title","Best Time Records"),c.sizes=new o(c.records.el,"div","records__buttons-wrap",""),c.buttons=[],c.tables=[],c.recordItems=[[],[],[],[],[],[],[]];for(var u=function(t){var e=new o(a.sizes.el,"button","records__button","".concat(t,"x").concat(t));4===t&&e.el.classList.add("records__button-active"),a.buttons.push(e),e.el.onclick=function(){var t=c.buttons.indexOf(e);c.switchActive(t)}},a=this,l=2;l<9;l++)u(l);for(l=2;l<9;l++){var p=new o(c.records.el,"div","records__block","");4===l&&p.el.classList.add("records__block-active"),c.tables.push(p);var h=new M(p.el,"div","records__record","");h.el.classList.add("records__record-head"),h.setHeadPlace("Place"),h.setTime("Time"),h.setMoves("Moves")}return c.closeBtn=new o(c.records.el,"button","records__close-btn","Close"),c.closeBtn.el.onclick=function(){c.el.classList.remove("puzzle__records-active"),c.onClick()},c.setTables(r),c}return I(e,t),e.prototype.setTables=function(t){var e=this;this.tables.forEach((function(o,n){for(var i=0;i<10;i++){var s=new M(o.el,"div","records__record","");s.setPlace(t[n][i].num),s.setTime(t[n][i].time),s.setMoves(t[n][i].moves),e.recordItems[n].push(s)}}))},e.prototype.destroyAll=function(){this.recordItems.forEach((function(t){t.forEach((function(t){t.destroy()}))})),this.recordItems=[[],[],[],[],[],[],[]]},e.prototype.switchActive=function(t){var e=this;this.buttons.forEach((function(o,n){t!==n&&(o.el.classList.remove("records__button-active"),e.tables[n].el.classList.remove("records__block-active"))})),this.buttons.forEach((function(o,n){t===n&&(o.el.classList.add("records__button-active"),e.tables[n].el.classList.add("records__block-active"))}))},e.prototype.openPopup=function(){this.el.classList.add("puzzle__records-active")},e.prototype.activeCurrentTable=function(t){this.buttons[t].el.click()},e}(o),T=[],O=0;O<7;O++){for(var N=[],j=1;j<11;j++){var D={num:j,time:"//",moves:"//"};N.push(D)}T.push(N)}var L=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),S=function(t){function e(e,n,i,s){var r=t.call(this,e,n,i,s)||this;return r.el.classList.add("puzzle__confirm-active"),r.confirm=new o(r.el,"div","confirm__inner-wrap",""),r.question=new o(r.confirm.el,"p","confirm__question","Do you want to continue the last saved game?"),r.btnBlock=new o(r.confirm.el,"div","confirm__btn-block",""),r.newGameBtn=new o(r.btnBlock.el,"button","confirm__button","New Game"),r.newGameBtn.el.onclick=function(){r.restartOnClick()},r.continueBtn=new o(r.btnBlock.el,"button","confirm__button","Continue"),r.continueBtn.el.onclick=function(){r.continueOnClick()},r}return L(e,t),e.prototype.disablePopup=function(){this.el.classList.remove("puzzle__confirm-active")},e}(o),x=function(){function t(t){var e=this;if(this.data=T,this.el=document.createElement("div"),this.el.className="main-wrap",t.append(this.el),localStorage.sleepyComrade){var o=JSON.parse(localStorage.getItem("sleepyComrade"));this.savedGame=o,this.emptyData=o,this.data=o.records}this.confirm=new S(this.el,"div","puzzle__confirm-wrap",""),this.overlay=new y(this.el,"div","puzzle__win-popup-wrap",""),this.records=new C(this.el,"div","puzzle__records-wrap","",this.data),this.buttonsBlock=new i(this.el,"div","buttons-wrap",""),this.gameInfo=new r(this.el,"div","puzzle__info-wrap","",this.emptyData.info),this.puzzle=new A(this.el,"div","puzzle-wrap","",this.emptyData.tiles),this.bottomPanel=new f(this.el,"div","puzzle__bottom-panel","",this.emptyData.tiles.columns),this.buttonsBlock.loadOnClick=function(){e.puzzle.loadGame(e.savedGame.tiles),e.gameInfo.setData(e.savedGame.info),e.bottomPanel.changeValue(e.savedGame.tiles.columns+"")},localStorage.sleepyComrade?(this.gameInfo.pauseTimer(),this.buttonsBlock.activeLoad(),this.buttonsBlock.clickLoadBtn()):this.confirm.disablePopup(),this.confirm.continueOnClick=function(){e.confirm.disablePopup(),e.gameInfo.startTimer()},this.confirm.restartOnClick=function(){e.startNewGame(),e.confirm.disablePopup()},this.overlay.onClick=function(){e.puzzle.disablePopup(),e.puzzle.generateTable(),e.gameInfo.resetCounter(),e.gameInfo.resetTimer()},this.records.onClick=function(){e.puzzle.checkActiveOverlay()||e.gameInfo.resumeTimer()},this.puzzle.onClick=function(){e.gameInfo.countMoves(),e.bottomPanel.playAudio()},this.puzzle.onPopupClose=function(){setTimeout((function(){e.overlay.turnOff()}),1),e.puzzle.generateTable(),e.gameInfo.resetCounter(),setTimeout((function(){e.gameInfo.resetTimer()}),1)},this.buttonsBlock.shuffleOnClick=function(){e.startNewGame()},this.buttonsBlock.pauseOnClick=function(t){t?(e.puzzle.activateOverlay(),e.gameInfo.pauseTimer()):(e.puzzle.disableOverlay(),e.gameInfo.resumeTimer())},this.buttonsBlock.saveOnClick=function(){e.saveGame(),e.buttonsBlock.activeLoad(),e.buttonsBlock.clickLoadBtn()},this.buttonsBlock.openOnClick=function(){e.records.openPopup();var t=e.puzzle.getSize();e.records.activeCurrentTable(t-2),e.gameInfo.pauseTimer()},this.bottomPanel.onChange=function(t){e.puzzle.changeSize(+t),e.gameInfo.resetCounter(),e.gameInfo.resetTimer(),e.buttonsBlock.pauseReset(),e.puzzle.disableOverlay()},this.puzzle.onShow=function(){var t=e.gameInfo.getInfo();e.overlay.turnOn(),e.gameInfo.pauseTimer(),e.puzzle.writeMessage(t[0],t[1],t[2],t[3]);var o=e.puzzle.columns,n=[],i=[];e.data[o-2].forEach((function(t){n.push(t.time),i.push(t.moves)}));var s=n.map((function(t){if("//"!==t&&t)return t.split(":")}));(!s[9]||+s[9][0]>+t[0]||+s[9][1]>+t[1]&&+s[9][0]>=+t[0]||+s[9][2]>+t[2]&&+s[9][1]>=+t[1]&&+s[9][0]>=+t[0])&&(s[9]=[t[0],t[1],t[2]],i[9]=t[3]);for(var r=9;r>0;r--)if(!s[r-1]||+s[r-1][0]>+s[r][0]||+s[r-1][1]>+s[r][1]&&+s[r-1][0]>=+s[r][0]||+s[r-1][2]>+s[r][2]&&+s[r-1][1]>=+s[r][1]&&+s[r-1][0]>=+s[r][0]){var c=s[r];s[r]=s[r-1],s[r-1]=c;var u=i[r];i[r]=i[r-1],i[r-1]=u}s.map((function(t){if(t)return t.join(":")})).forEach((function(t,n){e.data[o-2][n].time=t||"//",e.data[o-2][n].moves=i[n]})),e.records.destroyAll(),e.records.setTables(e.data)}}return t.prototype.saveGame=function(){this.savedGame.records=this.data,this.savedGame.tiles=this.puzzle.saveData(),this.savedGame.info=this.gameInfo.getInfo(),localStorage.setItem("sleepyComrade",JSON.stringify(this.savedGame))},t.prototype.startNewGame=function(){this.puzzle.generateTable(),this.gameInfo.resetCounter(),this.gameInfo.resetTimer(),this.puzzle.disableOverlay()},t}();new x(document.body)})();
//# sourceMappingURL=bundle.js.map