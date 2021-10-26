import React from 'react';
import { useState } from 'react';

function AddItem(props) {
	const [note, setNote] = useState('');

	function handleChange(event) {
		const { value } = event.target;

		setNote(value);
	}

	function submitNote(event) {
		event.preventDefault();
		props.onAdd(note);
		setNote('');
	}

	return (
		<div>
			<form className='create-note' onSubmit={submitNote}>
				<textarea
					name='content'
					onChange={handleChange}
					value={note}
					placeholder='Take a note...'
					rows='2'
				/>
				<button type='submit'>Add Note</button>
			</form>
		</div>
	);
}

export default AddItem;
