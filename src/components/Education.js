import React, { Component } from 'react';

class Education extends Component {
	render() {
		const { changeEducation } = this.props;

		return (
			<div id="education">
				<form id="educationForm">
					<label htmlFor="school">Educational Institution</label>
					<input type="text" id="school" onChange={changeEducation} />
					<label htmlFor="degree">Name of Programme</label>
					<input type="text" id="degree" onChange={changeEducation} />
					<label htmlFor="period">Period of Study</label>
					<input type="text" id="period" onChange={changeEducation} />
				</form>
			</div>
		);
	}
}

export default Education;
