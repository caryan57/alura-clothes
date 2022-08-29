const authToken = sessionStorage.getItem('accessToken');

const app = document.querySelector('.app');
app.style.display = 'none';

if (authToken == null) {
  window.location.replace('/');
} else {
  app.style.display = 'block';
}
