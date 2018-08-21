module.exports = function(app) {
    app.dataSources.mysqlDs.automigrate('Firewall', function(err) {
      if (err) throw err;
  
      app.models.Firewall.create([{
        recordId: 255130,
        testId: 321648,
        avgresponse: 12,
        minresponse: 6,
        maxresponse: 18,
        ports: 80,
        protocol: 'tcp',
        popen: 1,
        pblock: 0,
        tpopen: 1,
        tpblock: 0,
        time: '31 May 2018 17:54:46 GMT',
        pblocklist: null,
        detaillink: '/myspeed/db/report?id=334679',
        sid: 'Customer A - Plux/rc_full_test/RasPI',
        ip: '10.20.30.40',
        isp: 'Comcast'
      }, {
        recordId: 237150,
        testId: 381921,
        avgresponse: 10,
        minresponse: 12,
        maxresponse: 15,
        ports: 443,
        protocol: 'tcp',
        popen: 1,
        pblock: 0,
        tpopen: 1,
        tpblock: 0,
        time: '30 May 2018 15:24:16 GMT',
        pblocklist: null,
        detaillink: '/myspeed/db/report?id=334680',
        sid: 'Customer B - Dave/rc_full_test/RasPI',
        ip: '10.20.30.50',
        isp: 'Century Link'
      }], function(err, firewalls) {
        if (err) throw err;
  
        console.log('Models created: \n', firewalls);
      });
    });
  };