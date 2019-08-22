const DB = require('./db');

module.exports = class PutHandler {
  constructor(req, res) {
    this.modifiedObj = '';
    req.on('data', (chunk) => {
        this.modifiedObj += chunk;
    });
    req.on('end', () => {
      this.modifiedObj = JSON.parse(this.modifiedObj);
      const reqParams = req.url.split('/'); //ez az az url, ahová a kérést küldöm a back end-re
      const ordersDB = new DB(reqParams[1]);
      ordersDB.update(this.modifiedObj)
      .then( data => res.end(JSON.stringify(data)) )
      // .catch( err => {
      //   res.statusCode = 404;
      //   res.end(JSON.stringify(err))
      // })
    })
  }
}
