module.exports = function(app) {
    app.dataSources.mysqlDs.automigrate('AppUser', function(err) {
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
        if (err) throw err;
  
        console.log('Models created: \n', AppUsers);
      });
    });
  };