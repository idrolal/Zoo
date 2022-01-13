const editTariff = document.getElementById('editTariff');

editTariff.addEventListener('submit', async (event) => {
  event.preventDefault();

  const body = {
    name: event.target.name.value,
    description: event.target.description.value,
    price: event.target.price.value,
    id: event.target.button.value,
  };

  const response = await fetch('/editTariff', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  alert(json.message);
});
