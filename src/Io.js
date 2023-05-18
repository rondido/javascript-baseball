const { Console } = require("@woowacourse/mission-utils");
class Io {
  static input(message, callback) {
    Console.readLine(message, callback);
  }
  static outptu(message) {
    Console.print(message);
  }
  static close() {
    Console.close();
  }
}

module.exports = Io;
