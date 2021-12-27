let http = require('http');
let fs = require('fs');
let db = [];

class DataBaseElement {
  constructor(name,value) {
    this.name = name;
    this.value = value;
    if (!db.includes(this)) {
      db.push(this);
    };
  };
};

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./server/index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(8000);

exports.pushDatabase = function(name,value) {
  const element = new DataBaseElement(name,value);
};
exports.database = function() {
  return db;
};
exports.deleteDatabase = function(index) {
  db.splice(index,index + 1);
};
exports.clearDatabase = function() {
  db = []
};
