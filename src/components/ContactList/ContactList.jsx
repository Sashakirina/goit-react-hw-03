import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
	return (
		<ul className={style.phonebookContainer}>
			{contacts.map(({ id, name, number }) => (
				<Contact
					key={id}
					name={name}
					number={number}
					onDelete={onDelete}
					id={id}
				/>
			))}
		</ul>
	);
}

export default ContactList;
