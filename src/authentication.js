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
  },
  signout(cb) {
    localStorage.setItem('isAuthenticated', 'false');
  }
}