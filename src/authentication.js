export const Authenticate = () => {
  try {
    let status = localStorage.getItem('isAuthenticated')
    if (status === 'true') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const authentication = {
  login(cb) {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('access_token',cb)

  },
  signout(cb) {
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.clear()
  }
}