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

  function isAuthorizedPromise(requiredRole) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(roles.indexOf(requiredRole) >= 0);
      }, 0);
    });
  }
  return { isAuthorized, isAuthorizedAsync, isAuthorizedPromise, setRoles };
}

module.exports = AuthController();