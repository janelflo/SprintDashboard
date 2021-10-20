import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const TodoCheckbox = () => {
	const [complete, setComplete] = useState(false);

	const handleClick = () => setComplete(true);

	return (
		<Form className="float-end">
			{['checkbox'].map((todo) => (
				<div key={`default-${todo}`} className="mb-3">
					<Form.Check
						todo={todo}
						id={`default-${todo}`}
						label="✅"
						value={complete}
						onChange={handleClick}
					/>
				</div>
			))}
		</Form>
	);
};

export default TodoCheckbox;
