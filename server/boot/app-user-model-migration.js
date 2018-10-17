// module.exports = function(app) {
//   app.dataSources.mysqlDs.autoupdate('AppUser', function(err) {
//     if (err) throw err;
//   });
// };

module.exports = function(app) {
    app.dataSources.db.autoupdate('AppUser', function(err) {
      if (err) throw err;
  
      app.models.AppUser.create([{
        extensionNumber: 101,
        email: 'appadmin@example.org',
        password: 'testing',
        firstName: 'App',
        lastName: 'Admin',
        name: 'App Admin',
        businessPhone: '+17207249757',
        company: 'RingCentral',
        timezone: 'America/Denver',
        country: 'USA',
        languageCode: 'en-US',
        accountId: '871817004',
        site: 'San Jose'
      }], function(err, AppUsers) {
        //if (err) throw err;
        if (err) console.log(err);
        //console.log('Models created: \n', AppUsers);
      });
    });
  };