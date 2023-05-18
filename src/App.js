const Game = require("./Game");
const Io = require("./Io");

class App {
  //초기화
  constructor() {
    this.game = new Game();
  }
  play() {
    Io.output("숫자 야구 게임을 시작함");
    this.game.playCommand();
  }
}

module.exports = App;
