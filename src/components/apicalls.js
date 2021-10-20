const ENDPOINT =
	'https://crudcrud.com/api/d22eceb8df8e419eb2bbb8a87bab76ea/unicorns';

class ApiCalls {
	//READ - GET - GET ALL SPRINT DATA
	get = async () => {
		try {
			const response = await fetch(ENDPOINT);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log('Get All Sprints had an issue.', error);
		}
	};

	//READ - GET INDIVIDUAL SPRINT DATA
	getSprint = async (sprint) => {
		try {
			const response = await fetch(`${ENDPOINT}/${sprint._id}`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log('Get single sprint had an issue.', error);
		}
	};
	
	//UPDATE -- PUT - UPDATE SPRINT TODO DATA
	update = async (updatedSprint) => {
		console.log(updatedSprint);
		try {
			//Look at notes in LMS for proper update API call
			const response = await fetch(`${ENDPOINT}/${updatedSprint._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					sprintGoal: updatedSprint.sprintGoal,
					sprintName: updatedSprint.sprintName,
					toDos: updatedSprint.toDos,
				}),
			});
			console.log(response);
			return response;
		} catch (error) {
			console.log('Update Sprint had an issue.', error);
		}
	};

	//CREATE -- POST --CREATE SPRINT
	post = async (sprint) => {
		try {
			const response = await fetch(ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(sprint),
			});
			return await response.json();
		} catch (error) {
			console.log('Create New Sprint had an issue', error);
		}
	};

	//DELETE - DELETE SPRINT
	delete = async (sprint) => {
		try {
			const response = await fetch(`${ENDPOINT}/${sprint._id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			return response;
		} catch (error) {
			console.log('Delete Sprint had an issue', error);
		}
	};
}

export const apiCalls = new ApiCalls();
