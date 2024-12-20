const shortId = require("shortid");

class Ticket {
  /**
   *
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} // return Ticket Instant Object
   */

  constructor(username, price) {
    this.id = shortId.generate();
    this.username = username;
    this.price = price;
    this.createAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
