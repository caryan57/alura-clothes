// const authToken = sessionStorage.getItem('accessToken');
const authState = sessionStorage.getItem('authState');
console.log(authState);

const app = document.querySelector('.app');
app.style.display = 'none';

if (authState != 0) {
  app.style.display = 'block';
} else {
  window.location.replace('/');
}
