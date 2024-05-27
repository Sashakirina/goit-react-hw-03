import { useId } from "react";
import style from "./SearchForm.module.css";

function SearchForm({ queryValue, onSearch }) {
	const queryId = useId();

	return (
		<div className={style.container}>
			<label htmlFor={queryId}>Search</label>
			<input
				className={style.search}
				type="text"
				name="query"
				id={queryId}
				value={queryValue}
				onChange={(evt) => onSearch(evt.target.value)}
			/>
		</div>
	);
}

export default SearchForm;
