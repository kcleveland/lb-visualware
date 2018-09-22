module.exports = function(app) {

  switch(process.env.NODE_ENV) {
    case 'production':
      app.dataSources.mysqlProd.autoupdate('Voip', function(err) {
        if (err) throw err;
      });
      break;
    case 'development':
      app.dataSources.db.autoupdate('Voip', function(err) {
        if (err) throw err;
      });
      break;
    case 'staging':
      app.dataSources.mysqlStage.autoupdate('Voip', function(err) {
        if (err) throw err;
      });
      break;
    default:
      console.log('NODE_ENV not set to development, staging, or production. Not migrating Voip model to datasource.');
  }

};