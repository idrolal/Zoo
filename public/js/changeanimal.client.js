const changeanimal = document.getElementById('changeanimal');
changeanimal.addEventListener('submit', async (event) => {
  event.preventDefault();

  const response = await fetch('/changeAnimal', {
    method: 'POST',
    body: new FormData(changeanimal),
  });
  const json = await response.json();
  alert(json.message);
});

document.querySelectorAll('#buttonDelete')?.forEach((link) => link.addEventListener('click', async (event) => {
  const animalId = event.target.value;

  const body = {
    animalId,
  };

  const buttonDevice = document.querySelector(`div[data-id="${animalId}"]`);
  buttonDevice.remove();

  const response = await fetch('/changeAnimal/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  console.log(json.message);
}));
