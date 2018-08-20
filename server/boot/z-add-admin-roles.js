/**
 * Named "z-" so it runs last as loopback runs boot
 * scripts in alphbetical order ;)
 */

 /**
  * We'll just assign a static admin role each
  * time the application starts.
  */

  module.exports = function(app) {

  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  Role.create({
    name: 'admin'
  }, function(err, role) {
    if (err) console.log(err);

    //make appadmin an admin
    role.principals.create({
      principalType: RoleMapping.USER,
      principalId: 1
    }, function(err, principal) {
      console.log(err);
    });
  });

};