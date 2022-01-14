// document.cookie
document.querySelectorAll('#button')?.forEach((btn) => btn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('123');
}));

function alertCookieValue() {
  document.cookie = 'test1=Hello';
  document.cookie = 'test2=World';
  const { cookie } = document;
  if (cookie.split(';').filter((item) => item.includes('test1=Hello')).length) {
    alert(cookie);
  }
}
