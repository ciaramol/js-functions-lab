//In the body of the fetch you are required to write the code 
//that creates an array of uncompleted todo objects, 
//where an object contains a userID and todo title

//replace the map-filter combination with the reduce HOF.
//Hint: The initial value for the reducer's accumulator will be an empty array ( [] ).

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => response.json())
//   .then(todos => {
//     const uncompleted = todos.filter(todo => todo.completed === false).map(todos => {
//         return {
//             ID: `${todos.id}`,
//             title: `${todos.title}`,
//         };
//     });
//     console.log(uncompleted);
//   })
//   .catch(function(err) { 
//     console.log(err);
//   });

  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
    const uncompleted = todos.reduce((total, todos) => {
        todos.completed ? total : total.push({ userId: todos.userId, title: todos.title});
        return total;
    },[])
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });