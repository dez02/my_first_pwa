console.log("It/'s works!");

const todosDiv = document.querySelector('#todos');

function loadTodos() {
  fetch('http://localhost:3001/todos')
    .then(response => {
      response.json()
        .then(todos => {
          const allTodos = todos.map(todo => `<div><b>${todo.name}</b></div>`)
            .join('');
  
          todosDiv.innerHTML = allTodos; 
        });
    })
    .catch(console.error);
}

loadTodos(todos);

if(navigator.serviceWorker) {
	navigator.serviceWorker.register('service_worker.js').catch(err => console.error);
	
}