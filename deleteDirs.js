var fs = require("fs");
var rimraf = require('rimraf');

module.exports = {
      delete: function () {

            var directoriesToDelete = require('./directoriesToDelete.json');

            for (var itemKey in directoriesToDelete) {
                  var directoryPath = directoriesToDelete[itemKey];

                  rimraf(directoryPath, function (error) {
                        if (error) {
                              console.log('Error: ', error);
                        }
                        else {
                              console.log('Success!');
                        }
                  });
                  console.log('Deleting: ', directoryPath);
            }
      }
};
