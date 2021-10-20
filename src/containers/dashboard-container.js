import React from 'react';
import { apiCalls } from '../components/apicalls';
import { Container } from 'react-bootstrap';
import NewSprintForm from '../components/new-sprint-form';
import Sprint from '../components/sprint';

//Container that houses state
export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sprints: [],
			show: false,
		};
	}

	//instantiate the network request
	componentDidMount() {
		this.fetchSprints();
	}

	//READ API data to state
	fetchSprints = async () => {
		const sprints = await apiCalls.get();
		//Set the state of the current API data
		this.setState({ sprints });
	};

	//UPDATE API to state with new toDos
	updateSprint = async (updatedSprint) => {
		console.log(updatedSprint);
		await apiCalls.update(updatedSprint);
		this.fetchSprints();
	};

	//POST new sprint to state
	sendSprint = async (newSprint) => {
		await apiCalls.post(newSprint);
		this.fetchSprints();
	};

	//DELETE sprint on API, update state
	deleteSprint = async (sprint) => {
		await apiCalls.delete(sprint);
		this.fetchSprints();
	};

	render() {
		return (
			<Container>
				<h1 className="text-center"> Sprint Dashboard </h1>
				<NewSprintForm addSprint={this.sendSprint} />
				<div>
					{this.state.sprints.map((sprint) => (
						<Sprint
							todos={sprint.toDos}
							sprint={sprint}
							key={sprint._id}
							updateSprint={this.updateSprint}
							deleteSprint={this.deleteSprint}
						/>
					))}
				</div>
			</Container>
		);
	}
}
