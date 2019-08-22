const DB = require('./db');


module.exports = class PostHandler {
    constructor(req, res) {
        this.newObj = '';
        req.on('data', (chunk) => {
            this.newObj += chunk;
        });
        req.on('end', () => {
            this.newObj = JSON.parse(this.newObj);
            const reqParams = req.url.split('/');
            const ordersDB = new DB(reqParams[1]);
            ordersDB.post(this.newObj).then(
                data => res.end(JSON.stringify(data)),
                // (err) => {
                //     res.statusCode = 404;
                //     res.end(JSON.stringify(err))
                // }
            )
        })
    }
};