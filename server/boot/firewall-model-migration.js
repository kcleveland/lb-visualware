module.exports = function(app) {
  app.dataSources.mysqlDs.autoupdate('Firewall', function(err) {
    if (err) throw err;
  });
};