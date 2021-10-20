import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ToDoForm = ({ addToDo, handleClose }) => {
	const [toDos, setToDo] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(toDos);
		addToDo(toDos);
	};
	return (
		<Form onSubmit={onSubmit}>
			<Form.Control
				className="mb-3"
				type="text"
				value={toDos}
				onChange={(event) => setToDo(event.target.value)}
			/>
			<Button variant="primary" type="submit" onClick={handleClose}>
				Save
			</Button>
		</Form>
	);
};

export default ToDoForm;
