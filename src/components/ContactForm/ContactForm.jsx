import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import style from "./ContactForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	name: Yup.string("")
		.min(3, "Need to be min 3 symbols!")
		.max(50, "Need to be max 50 symbols!")
		.required("This field is required!"),
	number: Yup.number("Need to be a nubmer!")
		.min(3, "Need to be min 3 symbols!")
		.max(50, "Need to be max 50 symbols!")
		.required("This field is required!"),
});

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
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}>
			<Form className={style.form}>
				<label htmlFor={nameId}>Name</label>
				<Field
					type="text"
					name="name"
					id={nameId}
					required
					className={style.input}
				/>
				<ErrorMessage
					name="name"
					component="span"
					className={style.inputError}
				/>
				<label htmlFor={phoneId}>Phone</label>
				<Field
					type="tel"
					name="number"
					id={phoneId}
					required
					className={style.input}
				/>
				<ErrorMessage
					name="number"
					component="span"
					className={style.inputError}
				/>
				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
}

export default ContactForm;
