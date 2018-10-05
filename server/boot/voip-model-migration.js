module.exports = function(app) {
  app.dataSources.mysqlDs.autoupdate('Voip', function(err) {
    if (err) throw err;
  });
};