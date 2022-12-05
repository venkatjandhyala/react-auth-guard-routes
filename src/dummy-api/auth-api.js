export function signup(email, password) {
  const authPromise = new Promise((resolve, reject) => {
    resolve({
      token: 'abc',
    });
  });
  return authPromise;
}

export function login(email, password) {
  const authPromise = new Promise((resolve, reject) => {
    if (password !== 'secretpassword') {
      reject('Invalid credentials');
    }
    resolve({
      token: 'abc',
    });
  });
  return authPromise;
}
