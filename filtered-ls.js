var fs = require("fs");
var path = require("path");
fs.readdir(process.argv[2], (err, list) => {
  if (err) return console.error(err);
  list.forEach((File) => {
    if (path.extname(File) === `.${process.argv[3]}`) {
      console.log(File);
    }
  });
});
