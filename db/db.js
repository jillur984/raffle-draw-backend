const Ticket = require("../models/Ticket.js");

class MyDB {
  constructor() {
    this.tickets = [];
  }
  /**
   * create a tickt by user name and price
   * @param {string} username
   * @param {number} price
   * @returns {ticket} // return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @return {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  // return all ticket
  find() {
    return this.tickets;
  }

  /**
   * find ticktes by Id
   * @param {string} ticketId
   * @return {Ticket} ticket
   */

  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => {
        ticket.id === ticketId;
      }
    );
    return ticket;
  }

  /**
   * find all tickts by given username
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       *
       * @param {Ticket} ticket
       */
      (ticket) => {
        ticket.username === username;
      }
    );

    return tickets;
  }
  /**
   * upadte ticket by username and price if have any isssue
   * @param {string} ticketId
   * @param {{username:string,price:number}} ticketBody
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username;
    ticket.price = ticketBody.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  /**
   * delete ticket by id
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      this.tickets.slice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  // raffle draw
  draw(winnerCount) {
    let winnerIndexes = new Array(winnerCount);

    let index = 0;
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndexes.includes(winnerIndex)) {
        winnerIndexes[index++] = winnerIndex;
        continue;
      }
    }
    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();
module.exports = myDB;
