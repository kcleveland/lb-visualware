module.exports = function(app) {
  app.dataSources.mysqlDs.autoupdate('Capacity', function(err) {
    if (err) throw err;
  });
};