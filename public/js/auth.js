const login = document.getElementById('login');

login.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { method, action } = event.target;
  const body = {
    email: event.target.email.value,
    password: event.target.password.value,
  };

  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/js',
    },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  if (json.isAdmin) {
    window.location.href = '/animal';
  }
});
