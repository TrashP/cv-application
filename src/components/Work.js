import React, { Component } from 'react';

class Work extends Component {
	render() {
		const { changeWork } = this.props;

		return (
			<div id="work">
				<form id="workForm">
					<label htmlFor="company">Company Name</label>
					<input type="text" id="company" onChange={changeWork} />
					<label htmlFor="position">Position Held</label>
					<input type="text" id="position" onChange={changeWork} />
					<label htmlFor="tasks">Main Tasks</label>
					<input type="text" id="tasks" onChange={changeWork} />
					<label htmlFor="duration">Work Duration</label>
					<input type="text" id="duration" onChange={changeWork} />
				</form>
			</div>
		);
	}
}

export default Work;
