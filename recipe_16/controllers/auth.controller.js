function AuthController() {
  let roles;

  function setRoles(role) {
    roles = role;
  }
  function isAuthorized(requiredRole) {
    return roles.indexOf(requiredRole) >= 0;
  }

  function isAuthorizedAsync(requiredRole, cb) {
    setTimeout(() => {
      cb(roles.indexOf(requiredRole) >= 0);
    }, 0);
  }
  return { isAuthorized, isAuthorizedAsync, setRoles };
}

module.exports = AuthController();