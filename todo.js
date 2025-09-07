const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};
//{
// "userId": 1,
//  "id": 4,
//  " title": 'et porro tempora',
//   " completed": true
// }

const displayTodo = (todos) => {
  // 1.
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";
  // 2. loop
  todos.forEach((todo) => {
    console.log(todo);

    // 3.
    const todoCard = document.createElement("div");
    todoCard.innerHTML = ` 
    <div class="todo-card"> 
    <p>${
      todo.completed == true
        ? `<i class="fa-regular fa-square-check"></i>`
        : `<i class="fa-solid fa-square-check"></i> `
    } </p> 
    <h4>${todo.title}</h4>
    </div> 
    `;
    todoContainer.append(todoCard);
  });
};

loadTodo();
