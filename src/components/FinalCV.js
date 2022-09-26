import React, { Component } from 'react';

class FinalCV extends Component {
	render() {
		const {
			name,
			email,
			number,
			address,
			eduExp,
			workExp,
			delEdu,
			delWork,
		} = this.props;

		return (
			<div id="finalcv">
				<div id="cvinfo">
					<h1 className="title">{name}</h1>
					<div className="block">
						<h3>{email}</h3>
						<h3>{number}</h3>
						<h3>{address}</h3>
					</div>
				</div>
				<div id="cvedu">
					<h1 className="title">Education</h1>
					{eduExp.map((education, i) => {
						return (
							<div key={i} className="block">
								<h2 key={i}>{education.school}</h2>
								<h3 key={i + 1}>{education.degree}</h3>
								<h3 key={i + 2}>{education.period}</h3>
								<button
									type="button"
									className="deleteButton"
									id={i}
									onClick={delEdu}
									key={i + 3}
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>
				<div id="cvwork">
					<h1 className="title">Work Experience</h1>
					{workExp.map((work, i) => {
						return (
							<div key={i} className="block">
								<h2 key={i + 1}>{work.company}</h2>
								<h3 key={i + 2}>{work.position}</h3>
								<h3 key={i + 3}>{work.tasks}</h3>
								<h3 key={i + 4}>{work.duration}</h3>
								<button
									type="button"
									className="deleteButton"
									id={i}
									onClick={delWork}
									key={i + 5}
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default FinalCV;
