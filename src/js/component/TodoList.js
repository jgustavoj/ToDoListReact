import React, { useState } from "react";
//{} means that this is not a dafault import/exporting
import Todo from "./Todo";

const TodoList = () => {
	const [singleTodo, setSingleTodo] = useState({});
	const [todos, setTodos] = useState([
		{ label: "brush teeth" },
		{ label: "make the bed" },
		{ label: "walk dog" }
	]);
	const handleChange = e => {
		setSingleTodo({ label: e.target.value, done: false });
	};

	//e.target.value gives you the value of the input field on change (typing on the input field)

	const handleClick = e => {
		setTodos([...todos, singleTodo]);
	};

	//set singleTodo {}
	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	// the state is immutable - you can never change the state.
	// We copy the state we can manipulate the copy of the state then we
	// push the new todo

	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					name="todo"
					onChange={handleChange}
					value={singleTodo.label}
				/>
				<button onClick={handleClick}> Save </button>
			</form>
			{todos.map((value, index) => (
				//map manipulates an array, if you want to change anything to an array you use map method
				//creating a new a array from the old array
				<Todo
					todo={value.label}
					key={index}
					index={index}
					deleteTodo={deleteTodo}
				/>
			))}
			<div className="remaining-todos"> {todos.length} item left </div>
		</>
	);
};

export default TodoList;

//.prevents from submitting form/refreshing

//other ways to complete handle click
// setTodos(todos.concat(singleTodo))

//     let newTodos = []
//     for (let i = 0; i<todos.length; i++){
//             newTodos.push(todos[i])
//     }
//     newTodos.push(singleTodo)
//     setTodos (newTodos)
// }

//React is a one page application if you refresh the site then you might lose information in your state
//we dont want that

//another way to delete an item from list

// const [todos, setTodos] = useState (["Run", "walk", "sleep"]);
// const deletetask = (ind) => {
//     var newTodos = todos.filter ((item, i) => {return ind !=== i});
// }

// return

// <button onClick = {() = > deletetask(1)}>Delete</button>
