module.exports = function(app) {
  app.dataSources.mysqlDs.autoupdate('Web', function(err) {
    if (err) throw err;
  });
};