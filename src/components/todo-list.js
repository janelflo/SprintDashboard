import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import TodoCheckbox from './todo-checkbox';

const ToDoList = ({ todos }) => {
	return (
		<div>
			{todos.map((todo, index) => (
				<ListGroupItem key={index}>
					{todo}
					<TodoCheckbox todo={todo} />
				</ListGroupItem>
			))}
		</div>
	);
};

export default ToDoList;
