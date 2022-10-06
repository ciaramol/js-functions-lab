  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
    const uncompleted = todos.filter(todo => todo.completed === false).map(todos => {
        return {
            ID: `${todos.id}`,
            title: `${todos.title}`,
        };
    });
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });