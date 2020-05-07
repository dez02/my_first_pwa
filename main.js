console.log('hello depuis main');
const technosDiv = document.querySelector('#todos');

let technos = [
  {id: 1, name: 'Learn React'},
  {id: 2, name: 'Lear Node'},
  {id: 3, name: 'Learn MongoDB'},
  {id: 4, name: 'Learn PWA'}
];

function loadTechnologies(technos) {
  const allTechnos = technos
    .map(t => `<div><b>${t.name}</b>`)
    .join('');
  technosDiv.innerHTML = allTechnos; 
}

loadTechnologies(technos);