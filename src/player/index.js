class Player {
  constructor() {
    this.number = null;
  }
  getNumber() {
    return this.number;
  }
  setNumber() {
    throw new Error("Not Implemented");
  }
}

module.exports = Player;
