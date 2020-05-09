const todos = document.querySelector('.todos');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add todo form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render todo data
const rendertodo = (data, id) => {

  const html = `
    <div class="card-panel todo white row" data-id="${id}">
      <img src="/img/dish.png" alt="todo">
      <div class="todo-details">
        <div class="todo-title">${data.name}</div>
        <div class="todo-description">${data.description}</div>
      </div>
      <div class="todo-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;
  todos.innerHTML += html;

};