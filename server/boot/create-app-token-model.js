module.exports = function(app) {
    app.dataSources.mysqlProd.autoupdate('AppToken', function(err) {
      if (err) throw err;
    });
};