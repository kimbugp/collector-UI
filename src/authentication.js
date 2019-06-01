export const Authenticate = () => {
  try {
    let status = localStorage.getItem('isAuthenticated')
    let user = JSON.parse(localStorage.getItem("user"))
    if (status === 'true') {
      return user;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const authentication = {
  login(cb, user, profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('access_token', cb)
    localStorage.setItem('user', JSON.stringify(user))

  },
  signout(cb) {
    localStorage.clear('access_token')
    localStorage.clear('isAuthenticated')
    localStorage.clear('user')
    localStorage.clear('profile')
    try {
      var auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }
    catch (err) {
      console.log(err);
    }
  }
}