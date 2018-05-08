export const signUp = (userInfo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: userInfo}
  });
};

export const logIn = (userInfo) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/session',
    data: {user: userInfo}
  });
};

export const logOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
