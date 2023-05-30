// the next line is equivalent to `var useState = React.useState;`
const { useState } = React;

const TodoListItem = (props) => {
  // This "Array destructuring" syntax is equivalent to:
  // var isDoneTools = useState(false);
  // var isDone = isDoneTools[0];
  // var setIsDone = isDoneTools[1];
  const [isDone, setIsDone] = useState(false);

  // Making the rendered style a conditional based on on our `isDone` state
  // lets us update the style based on user interactions.

  // You can pass inline styles using React's `style` attribute to any component
  // snake-cased css properties such as `text-decoration` become camelCased in the keys of the inline style object
  const style = {
    fontWeight: isDone ? 'bold' : 'normal',
  };

  // When a list item is clicked, we will toggle the `isDone`
  // boolean, and our component's `render` method will run again
  return (
    <li style={style} onMouseEnter={() => setIsDone(true)}
        onMouseLeave={() => setIsDone(false)}>
        {props.todo}
    </li>
  );
};

// Now, update our `TodoList` to use the new `TodoListItem` component
const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </ul>
);



const App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Coconut Coffee', 'Coconut Milk']} />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);
