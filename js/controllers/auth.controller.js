const authToken = sessionStorage.getItem('accessToken');
const authState = sessionStorage.getItem('authState');

const app = document.querySelector('.app');
app.style.display = 'none';

if (authToken == null || authState == null) {
  window.location.replace('/');
} else {
  app.style.display = 'block';
}
