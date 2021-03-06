const editanimal = document.getElementById('editanimal');
editanimal.addEventListener('submit', async (event) => {
  event.preventDefault();

  const idAnimal = window.location.pathname.split('/').pop();

  const response = await fetch(`/changeAnimal/${idAnimal}`, {
    method: 'PUT',
    body: new FormData(editanimal),
  });
  const json = await response.json();
  // row.innerHTML = `<div class='png'>${json.text()}</div>`
  alert(json.message);
});
