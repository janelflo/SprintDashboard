import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ToDoModal from './todo-modal';
import ToDoList from './todo-list';
import DeleteButton from './delete-button';

const Sprint = ({ sprint, updateSprint, deleteSprint, todos }) => {
	//Update API on Sprint with added ToDos
	const addNewToDos = (todo) => {
		console.log(todo);
		console.log(
			updateSprint({ ...sprint, toDos: [...sprint.toDos, todo] })
		);
	};

	return (
		<Card className="m-4" variant="flush">
			<Card.Header as="h4">
				{`${sprint.sprintName} - ${sprint.sprintGoal}`}
				<DeleteButton deleteSprint={deleteSprint} sprint={sprint} />
			</Card.Header>
			<Card.Body>
				<ListGroup>
					{/**ToDoList Component */}
					<ToDoList todos={todos} />
				</ListGroup>
				{/**ToDoModal Component */}
				<ToDoModal addToDo={addNewToDos} sprint={sprint} />
			</Card.Body>
		</Card>
	);
};

export default Sprint;
