import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

	const inputEl = useRef();
	const deleteContactHandler = (id) => {
		props.getContactID(id);
	};

	const editContactHandler = ({id, name, email}) => {
		props.editContactHandler({id, name, email});
	}

	const renderContactList = props.contacts.map((contact) => {
		return <ContactCard contact={contact}
					clickHandler={deleteContactHandler}
					editContactHandler={editContactHandler}
					key={contact.id}></ContactCard>
	});

	const getSearchTerm = () => {
		props.searchKeyword(inputEl.current.value);
	};

	return (
		<div className="main" style={{marginTop:"100px"}}>
			<h2>Contact List
				<Link to="/add">
					<button className="ui button blue right">Add Contact</button>
				</Link>
			</h2>
			<div className="ui search">
				<div className="ui icon input">
					<input type="text" 
						placeholder="Search Contact" 
						ref={inputEl}
						value={props.term}
						onChange={getSearchTerm}
						className="prompt" />
					<i className="search icon"></i>
				</div>
			</div>
			<div className="ui celled list">
				{renderContactList.length > 0 ? renderContactList : "No Contacts available"}
			</div>
		</div>
	)
}

export default ContactList;