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
