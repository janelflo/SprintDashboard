import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteButton = ({ deleteSprint, sprint }) => {
	return (
		<Button
			className="btn btn-danger float-end"
			onClick={(event) => deleteSprint(sprint)}>
			Delete
		</Button>
	);
};

export default DeleteButton;
