module.exports = function(app) {

  switch(process.env.NODE_ENV) {
    case 'production':
      app.dataSources.mysqlProd.autoupdate('AppUser', function(err) {
        if (err) throw err;
      });
      break;
    case 'development':
      app.dataSources.db.autoupdate('AppUser', function(err) {
        if (err) throw err;
      });
      break;
    case 'staging':
      app.dataSources.mysqlStage.autoupdate('AppUser', function(err) {
        if (err) throw err;
      });
      break;
    default:
      console.log('NODE_ENV not set to development, staging, or production. Not migrating AppUser model to datasource.');
  }

};

// module.exports = function(app) {
//     app.dataSources.db.autoupdate('AppUser', function(err) {
//       if (err) throw err;
  
//       app.models.AppUser.create([{
//         extensionNumber: 101,
//         email: 'appadmin@example.org',
//         password: 'testing',
//         firstName: 'App',
//         lastName: 'Admin',
//         name: 'App Admin',
//         businessPhone: '+17207249757',
//         company: 'RingCentral',
//         timezone: 'America/Denver',
//         country: 'USA',
//         languageCode: 'en-US',
//         accountId: '871817004',
//         site: 'San Jose'
//       }], function(err, AppUsers) {
//         if (err) throw err;
  
//         console.log('Models created: \n', AppUsers);
//       });
//     });
//   };