const loginButton = document.getElementById('loginButton');
const click = document.getElementById('click');

loginButton.addEventListener('click', async () => {
  click.innerHTML = `<center>

  <form id='login' name='login' method="post" action="/">

      <label for="email">Email</label>
      <input id='email' type="email" name='email'>

      <label for='password'>Пароль</label>
      <input id='password' type="password" name='password'>

      <button type="submit">Войти</button>

  </form>

</center>`;
});
