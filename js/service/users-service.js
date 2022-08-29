const url = 'http://localhost:3000/signin';
const loginUser = (email, password) => {
  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export const userServices = {
  loginUser,
};
