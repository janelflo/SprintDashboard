import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ToDoForm from './todo-form';
import ToDoButton from './todo-button';

const ToDoModal = ({ addToDo, sprint }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<ToDoButton onClick={handleShow} />
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add ToDo:</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/**Modal Form Component */}
					<ToDoForm
						addToDo={addToDo}
						handleClose={handleClose}
						sprint={sprint}
					/>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ToDoModal;
