import React from 'react';
import { Button } from 'react-bootstrap';

const ToDoButton = ({ sprint, updatesprint, onClick }) => {
	return (
		<Button
			onClick={onClick}
			className="btn btn-secondary btn-sm mt-2"
			updatesprint={updatesprint}
			sprint={sprint}>
			+ ToDo
		</Button>
	);
};
export default ToDoButton;
