import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const NewSprintForm = (props) => {
	const [sprintName, setName] = useState('');
	const [sprintGoal, setGoal] = useState('');
	let toDos = [];

	const onSubmit = (event) => {
		event.preventDefault();
		if (sprintName && sprintGoal) {
			props.addSprint({ sprintName, sprintGoal, toDos });
			setName('');
			setGoal('');
		} else {
			alert('Please enter a valid name and goal.');
		}
	};

	return (
		<Card className="m-4">
			<Card.Header as="h4" className="text-center">
				<strong>Create a New Sprint</strong>
			</Card.Header>
			<Card.Body>
				<Form onSubmit={onSubmit}>
					{/**Name */}
					<Form.Group
						className="mb-3 mt-3"
						controlId="Form.ControlInput1">
						<Form.Label>Sprint Name:</Form.Label>
						<Form.Control
							type="text"
							placeholder="ex. Sprint 0"
							onChange={(event) => setName(event.target.value)}
							value={sprintName}
						/>
					</Form.Group>
					{/**Goal */}
					<Form.Group className="mb-3" controlId="Form.ControlInput3">
						<Form.Label>Sprint Goal:</Form.Label>
						<Form.Control
							type="text"
							onChange={(event) => setGoal(event.target.value)}
							value={sprintGoal}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Create Sprint
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default NewSprintForm;
