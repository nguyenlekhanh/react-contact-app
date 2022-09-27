import React from "react";
import { Link } from "react-router-dom";
class AddContact extends React.Component {
	state = {
		name: "",
		email: "",
	}

	add = (e) => {
		e.preventDefault();
		if(this.state.name === "" && this.state.email ==="") {
			alert("ALl the fields are mandatory!");
			return;
		}
		this.props.addContactHandler(this.state);
		this.setState({name: "", email: ""});
	}
	render() {
		return (
			<div className="ui main" style={{marginTop:"100px"}}>
				<Link to="/">Back</Link>
				<h2>Add Contact</h2>
				<form className="ui form" onSubmit={this.add}>
					<div className="field">
						<label>Name</label>
						<input type="text" name="name" placeholder="Name..." onChange={(e) => this.setState({"name": e.target.value})}
							value={this.state.name}/>
					</div>
					<div className="field">
						<label>Email</label>
						<input type="text" name="email" placeholder="Email..." 
							onChange={(e) => this.setState({"email": e.target.value})}
							value={this.state.email}/>
						<button className="ui button blue">Add</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddContact;