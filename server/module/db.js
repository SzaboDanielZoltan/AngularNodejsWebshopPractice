const path = require('path');
const fs = require('fs');


module.exports = class DB {
  constructor(jsonFileName) {
    this.jsonDirectory = path.join('./../json');
    this.jsonFilePath = path.join(
      this.jsonDirectory,
      `${jsonFileName}.json`,
    );

    console.log(this.jsonFilePath);
  }

  find(id = 0) {
    return new Promise((resolve, reject) => {
      if (id == 0) {
        this.getJsonArray().then(
          dataArray => resolve(dataArray),
          err => reject(err),
        );
      } else {
        this.getJsonArray().then(
          dataArray => resolve(dataArray.filter(order => order.id == id)[0] || {}),
          err => reject(err),
        );
      }
    });
  }

  post(newObj) {
    return new Promise((resolve, reject) => {
      this.getJsonArray().then(
        dataArray => {
          const newId = this.maxId(dataArray) + 1;
          newObj.id = newId;
          dataArray.push(newObj);
          fs.writeFile(this.jsonFilePath, JSON.stringify(dataArray, null, 2), 'utf8', (err) => {
            return reject(err);
          })
        },
        err => reject(err),
      );
    })
  }

  update(modifiedObj) {
    return new Promise( (resolve, reject) => {
      this.getJsonArray().then(
        dataArray => {
          dataArray.forEach( (obj) => {
            if (obj.id == modifiedObj.id) {
              for (let k in obj) {
                obj[k] = modifiedObj[k];
              }
            }
          })
          fs.writeFile(this.jsonFilePath, JSON.stringify(dataArray, null, 2), 'utf8', (err) => {
            return reject(err); //valamiért rosszul működik az error kezelés
          })
        },
        err => reject(err),
      );
    })
  }

  delete(id) {
    return new Promise( (resolve, reject) => {
      this.getJsonArray().then(
        dataArray => {
          const index = dataArray.findIndex(x => x.id == id);
          dataArray.splice(index, 1);
          fs.writeFile(this.jsonFilePath, JSON.stringify(dataArray, null, 2), 'utf8', (err) => {
            return reject(err);
          })
        },
        err => reject(err),
      )
    })
  }

  maxId(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i].id > result) {
        result = array[i].id;
      }
    }

    return result;
  }

  getJsonArray() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonFilePath, 'utf8', (err, jsonString) => {
        if (err) {
          return reject(err);
        }

        resolve(JSON.parse(jsonString));
      });
    });
  }
};
