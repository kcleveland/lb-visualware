module.exports = function(app) {
  app.dataSources.mysqlDs.autoupdate('Quality', function(err) {
    if (err) throw err;
  });
};