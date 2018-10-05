module.exports = function(app) {
  app.dataSources.mysqlDs.autoupdate('Route', function(err) {
    if (err) throw err;
  });
};