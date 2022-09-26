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
					<h1>{name}</h1>
					<h3>{email}</h3>
					<h3>{number}</h3>
					<h3>{address}</h3>
				</div>
				<div id="cvedu">
					{eduExp.map((education, i) => {
						return (
							<div key={i}>
								<h1 key={i}>{education.school}</h1>
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
					{workExp.map((work, i) => {
						return (
							<div key={i}>
								<h1 key={i + 1}>{work.company}</h1>
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
