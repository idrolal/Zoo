const reg = document.getElementById('reg');

reg.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { method, action } = event.target;
  const body = {
    email: event.target.name.email,
    password: event.target.name.password,
  };

  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = await response.json();

  if (json.isAdmin) {
    window.location.href = '/animal';
  }
});
