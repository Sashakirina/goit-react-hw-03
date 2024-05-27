import { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchForm/SearchForm";
import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./components/ContactList/contacts.json";

function App() {
	const [queryValue, setQueryValue] = useState("");
	const [contacts, setContacts] = useState(() => {
		return JSON.parse(localStorage.getItem("contacts")) || initialContacts;
	});

	const addContact = ({ name, number }) => {
		const newContact = {
			name,
			number,
			id: nanoid(),
		};

		setContacts((prevContacts) => {
			return [...prevContacts, newContact];
		});
	};

	const visibleContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(queryValue.toLowerCase())
	);

	const deleteContact = (contactId) => {
		setContacts((prevContacts) => {
			return prevContacts.filter((contact) => contact.id !== contactId);
		});
	};

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	return (
		<div>
			<h1>Phonebook</h1>
			<ContactForm onAdd={addContact} />
			<SearchBox queryValue={queryValue} onSearch={setQueryValue} />
			<ContactList contacts={visibleContacts} onDelete={deleteContact} />
		</div>
	);
}

export default App;
