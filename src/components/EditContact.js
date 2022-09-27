import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EditContact = (props) => {
	const location = useLocation();
	const navigate = useNavigate();

	const [name, setName] = useState(location.state?.contact?.name || "");
	const [email, setEmail] = useState(location.state?.contact?.email || "");
	const [id, setId] = useState(location.state?.contact?.id || "");

	const update = (e) => {
		e.preventDefault();

		if(name === "" && email ==="") {
			alert("All the fields are mandatory!");
			return;
		}
		props.editContactHandler({id, name, email});
		navigate("/");
	}

	return (
		<div className="ui main" style={{marginTop:"100px"}}>
			<Link to="/">Back</Link>
			<h2>Edit Contact</h2>
			<form className="ui form" onSubmit={update}>
				<div className="field">
					<label>Name</label>
					<input type="text" name="name" placeholder="Name..." 
						onChange={(e) => setName(e.target.value)}
						value={name}/>
				</div>
				<div className="field">
					<label>Email</label>
					<input type="text" name="email" placeholder="Email..." 
						onChange={(e) => setEmail(e.target.value)}
						value={email}/>
					<button className="ui button blue">Update</button>
				</div>
			</form>
		</div>
	)
}

export default EditContact;