import './App.css';
import React, { Component } from 'react';
import Info from './components/Info';
import Education from './components/Education';
import Work from './components/Work';
import FinalCV from './components/FinalCV';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			number: '',
			address: '',
			education: {
				school: '',
				degree: '',
				period: '',
			},
			eduExp: [],
			work: {
				company: '',
				position: '',
				tasks: '',
				duration: '',
			},
			workExp: [],
		};
	}

	changeInfo = (e) => {
		if (e.target.id === 'name') {
			this.setState({
				...this.state,
				name: e.target.value,
			});
		} else if (e.target.id === 'email') {
			this.setState({
				...this.state,
				email: e.target.value,
			});
		} else if (e.target.id === 'number') {
			this.setState({
				...this.state,
				number: e.target.value,
			});
		} else if (e.target.id === 'address') {
			this.setState({
				...this.state,
				address: e.target.value,
			});
		}
	};

	changeEducation = (e) => {
		if (e.target.id === 'school') {
			this.setState({
				...this.state,
				education: {
					school: e.target.value,
					degree: this.state.education.degree,
					period: this.state.education.period,
				},
			});
		} else if (e.target.id === 'degree') {
			this.setState({
				...this.state,
				education: {
					school: this.state.education.school,
					degree: e.target.value,
					period: this.state.education.period,
				},
			});
		} else if (e.target.id === 'period') {
			this.setState({
				...this.state,
				education: {
					school: this.state.education.school,
					degree: this.state.education.degree,
					period: e.target.value,
				},
			});
		}
	};

	changeWork = (e) => {
		if (e.target.id === 'company') {
			this.setState({
				...this.state,
				work: {
					company: e.target.value,
					position: this.state.work.position,
					tasks: this.state.work.tasks,
					duration: this.state.work.duration,
				},
			});
		} else if (e.target.id === 'position') {
			this.setState({
				...this.state,
				work: {
					company: this.state.work.company,
					position: e.target.value,
					tasks: this.state.work.tasks,
					duration: this.state.work.duration,
				},
			});
		} else if (e.target.id === 'tasks') {
			this.setState({
				...this.state,
				work: {
					company: this.state.work.company,
					position: this.state.work.position,
					tasks: e.target.value,
					duration: this.state.work.duration,
				},
			});
		} else if (e.target.id === 'duration') {
			this.setState({
				...this.state,
				work: {
					company: this.state.work.company,
					position: this.state.work.position,
					tasks: this.state.work.tasks,
					duration: e.target.value,
				},
			});
		}
	};

	addEducation = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			eduExp: this.state.eduExp.concat(this.state.education),
			education: {
				school: '',
				degree: '',
				period: '',
			},
		});

		document.getElementById('school').value = '';
		document.getElementById('degree').value = '';
		document.getElementById('period').value = '';
	};

	deleteEducation = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			eduExp: this.state.eduExp.filter(
				(edu, i) => i !== parseInt(e.target.id)
			),
		});
	};

	addWork = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			workExp: this.state.workExp.concat(this.state.work),
			work: {
				company: '',
				position: '',
				tasks: '',
				duration: '',
			},
		});

		document.getElementById('company').value = '';
		document.getElementById('position').value = '';
		document.getElementById('tasks').value = '';
		document.getElementById('duration').value = '';
	};

	deleteWork = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			workExp: this.state.workExp.filter(
				(work, i) => i !== parseInt(e.target.id)
			),
		});
	};

	render() {
		return (
			<div id="container">
				<Info changeInfo={this.changeInfo} />
				<h1>EDUCATION</h1>
				<button
					type="button"
					id="submitEdu"
					onClick={this.addEducation}
				>
					Add
				</button>
				<Education changeEducation={this.changeEducation} />
				<h1>WORK EXPERIENCE</h1>
				<button type="button" id="submitWork" onClick={this.addWork}>
					Add
				</button>
				<Work changeWork={this.changeWork} />
				<FinalCV
					{...this.state}
					delEdu={this.deleteEducation}
					delWork={this.deleteWork}
				/>
			</div>
		);
	}
}

export default App;
