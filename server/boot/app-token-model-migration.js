module.exports = function(app) {

  //if (!process.env.NODE_ENV) {
    //console.log(process.env.NODE_ENV);
    //var environment = process.env.NODE_ENV;
    //console.log('NODE_ENV not set, not migrating AppToken model to datasource.');
  //}

  switch(process.env.NODE_ENV) {
    case 'production':
      app.dataSources.mysqlProd.autoupdate('AppToken', function(err) {
        if (err) throw err;
      });
      break;
    case 'development':
      app.dataSources.db.autoupdate('AppToken', function(err) {
        if (err) throw err;
      });
      break;
    case 'staging':
      app.dataSources.mysqlStage.autoupdate('AppToken', function(err) {
        if (err) throw err;
      });
      break;
    default:
      console.log('NODE_ENV not set to development, staging, or production. Not migrating AppToken model to datasource.');
  }

};