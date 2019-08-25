const DB = require('./db');

module.exports = class DeleteHandler {
  constructor(req, res) {
    const reqParams = req.url.split('/');
    const ordersDB = new DB(reqParams[1]);
    const id = reqParams[2];

    ordersDB.delete(id).then(data => res.end(data));
  }
}
