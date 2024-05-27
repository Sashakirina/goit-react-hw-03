import { FaUser, FaPhoneAlt } from "react-icons/fa";
import style from "./Contact.module.css";

function Contact({ name, number, onDelete, id }) {
	return (
		<li className={style.phonebookEntry}>
			<FaUser className={style.phonebookIcon} />
			<p className={style.phonebookItem}>{name}</p>
			<br />
			<FaPhoneAlt className={style.phonebookIcon} />
			<p className={style.phonebookItem}>{number}</p>
			<button className={style.phonebookDelete} onClick={() => onDelete(id)}>
				Delete
			</button>
		</li>
	);
}

export default Contact;
