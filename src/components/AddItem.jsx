import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

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
			<Form className='create-note' onSubmit={submitNote}>
				<input
					type='text'
					name='content'
					onChange={handleChange}
					value={note}
					placeholder='Take a note...'
				/>
				<button type='submit'>+</button>
			</Form>
		</div>
	);
}

export default AddItem;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: 50px;

	& input {
		width: 400px;
		height: 40px;
		font-size: 20px;
		border-radius: 10px;
		padding: 0 30px;
	}
	& button {
		position: absolute;
		bottom: -10px;
		right: 15px;
		font-size: 20px;
		border-radius: 50%;
		background-color: #f5ba13;
		color: white;
		border: none;
	}
`;
