import { Formik, Form, Field } from "formik";
import { useId } from "react";
import style from "./ContactForm.module.css";

function ContactForm({ onAdd }) {
	const nameId = useId();
	const phoneId = useId();

	const initialValues = {
		id: "",
		name: "",
		number: "",
	};

	const handleSubmit = (values, action) => {
		onAdd({ name: values.name, number: values.number });
		action.resetForm();
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={style.form}>
				<label htmlFor={nameId}>Name</label>
				<Field
					type="text"
					name="name"
					id={nameId}
					required
					className={style.input}
				/>
				<label htmlFor={phoneId}>Phone</label>
				<Field
					type="tel"
					name="number"
					id={phoneId}
					required
					className={style.input}
				/>
				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
}

export default ContactForm;
