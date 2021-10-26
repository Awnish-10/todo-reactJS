import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function DisplayListItem(props) {
	const [editMode, setEditMode] = useState(false);
	const [editText, setEditText] = useState(props.content);

	function handleDelete() {
		props.onDelete(props.id);
	}
	function handleEdit() {
		setEditMode(true);
	}
	function editChangeHandler(event) {
		setEditText(event.target.value);
	}
	function handleSave() {
		console.log(editText);
		props.onEdit(props.id, editText);
		setEditMode(false);
	}

	return (
		<Note>
			{editMode ? (
				<div>
					<input
						type='text'
						onChange={editChangeHandler}
						value={editText}
					></input>
					<BtnContainer>
						<button style={{ background: 'green' }} onClick={handleSave}>
							Save
						</button>
					</BtnContainer>
				</div>
			) : (
				<div>
					<p>{props.content}</p>
					<BtnContainer>
						<button style={{ background: 'red' }} onClick={handleDelete}>
							Delete
						</button>
						<button
							style={{ background: '#f5ba13' }}
							onClick={handleEdit}
						>
							Edit
						</button>
					</BtnContainer>
				</div>
			)}
		</Note>
	);
}

export default DisplayListItem;

const Note = styled.div`
	width: 200px;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 2px solid grey;
	border-radius: 10px;
	padding: 10px;
	margin: 30px;

	& p {
		margin: 16px;
	}
	& input {
		margin: 16px;
		border: none;
		outline: none;
	}
`;

const BtnContainer = styled.div`
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	& button {
		color: white;
		outline: none;
		padding: 5px;
		border: none;
		margin-right: 2px;
	}
`;
