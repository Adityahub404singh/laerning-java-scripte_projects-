let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '4/10/2023'
  },
  {
    item: 'Go to College',
    dueDate: '4/10/2023'
  }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);

      
       // Remove the item from the list and //then call displayItems() to update the UI and btn-delete class to the button element. This will allow the user to delete a specific item from the todo list. After deleting the item, we call and using in css to style the button.
       // 
       // 
       // 
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}