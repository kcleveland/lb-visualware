module.exports = function(app) {
    app.dataSources.mysqlDs.autoupdate('AppToken', function(err) {
      if (err) throw err;
    });
};
