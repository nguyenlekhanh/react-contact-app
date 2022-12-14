import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.png';

const CardContact = (props) => {
	const {id, name, email} = props.contact;
	return (
		<div className="item">
			<img className="ui avatar image" src={user} alt="user" />
			<div className="content">
				<div className="header">
					<Link to={`/contact/${id}`} state={{ contact: props.contact }}>
						<div className="header">{name}</div>
						<div>{email}</div>
					</Link>
					<i className="trash alternate outline icon" style={{color:"red", marginTop: "7px", marginLeft: "10px"}}
						onClick={() => props.clickHandler(id)}></i>
					<Link to="edit" state={{ contact: props.contact }}>
						<i className="edit alternate outline icon" style={{color:"blue", marginTop: "7px"}}
							></i>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CardContact;