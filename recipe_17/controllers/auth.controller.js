let user;

function setUser(inUser) {
  user = inUser;
}

function isAuthorized(requiredRole) {
  if (user) {
    return user.isAuthorized(requiredRole);
  }
}

// function isAuthorizedAsync(requiredRole, cb) {
//   setTimeout(() => {
//     cb(roles.indexOf(requiredRole) >= 0);
//   }, 0);
// }

// function isAuthorizedPromise(requiredRole) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(roles.indexOf(requiredRole) >= 0);
//     }, 0);
//   });
// }
// return {  isAuthorizedAsync, isAuthorizedPromise,  };
function getIndex(req, res) {
  res.render('index');
}

function getIndexWithDependency(req, res) {
  try {
    if (req.user.isAuthorized('admin')) {
      return res.render('index');
    }
    res.render('notAuth');
  } catch (e) {
    res.render('error');
  }
}

module.exports = { isAuthorized, setUser, getIndex, getIndexWithDependency };