fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
    const completed = todos.reduce((total, todos) => {
        if (todos.completed) {
            total[todos.userId] === undefined ? (total[todos.userId] = 1) : (total[todos.userId] += 1);
        }
        return total;
    }, {});
    console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });