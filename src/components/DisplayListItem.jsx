import React from 'react';
import { useState } from 'react';

function DisplayListItem(props) {
	const [editMode, setEditMode] = useState(false);

	function handleDelete() {
		props.onDelete(props.id);
	}
	function handleEdit() {
		setEditMode(true);
	}

	return (
		<div className='note'>
			{editMode ? (
				<input type='text' value={props.content}></input>
			) : (
				<p>{props.content}</p>
			)}

			<button onClick={handleDelete}>Delete</button>
			<button onClick={handleEdit}>Edit</button>
		</div>
	);
}

export default DisplayListItem;
