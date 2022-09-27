import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/user.png";

const ContactDetail = (props) => {
	const location = useLocation();

	const {name, email} = location.state?.contact;

	return (
		<div className="main">
			<div className="ui card centered">
				<div className="image">
					<img src={user} alt="user" />
				</div>
				<div className="content">
					<div className="header">{name}</div>
					<div className="description">{email}</div>
				</div>
				<Link to="/">Back</Link>
			</div>
		</div>
	);
}

export default ContactDetail;