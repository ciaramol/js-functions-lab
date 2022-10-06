fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
    const completedAccumulator = todos.reduce((total, todos) => {
        return total + todos.completed;
    },0)
    console.log("Amount of completed books = " + completedAccumulator);
  })
  .catch(function(err) { 
    console.log(err);
  });