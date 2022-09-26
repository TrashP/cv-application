import React, { Component } from 'react';

class Info extends Component {
	render() {
		const { changeInfo } = this.props;

		return (
			<div id="info">
				<h1>PERSONAL DETAILS</h1>
				<form id="infoForm">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" onChange={changeInfo} />
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={changeInfo} />
					<label htmlFor="number">Phone Number</label>
					<input type="text" id="number" onChange={changeInfo} />
					<label htmlFor="address">Address</label>
					<input type="text" id="address" onChange={changeInfo} />
				</form>
			</div>
		);
	}
}

export default Info;
