import './App.css';
import { useState } from 'react';
import DisplayListItem from './components/DisplayListItem';
import AddItem from './components/AddItem';
import styled from 'styled-components';

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}

	function editNote(id, note) {
		setNotes((prevNotes) => {
			return prevNotes.map((noteItem, index) => {
				if (id === index) {
					return note;
				} else {
					return noteItem;
				}
			});
		});
	}

	return (
		<Wrapper>
			<AddItem onAdd={addNote} />
			<ItemsContainer>
				{notes.map((noteItem, index) => {
					return (
						<DisplayListItem
							key={index}
							id={index}
							content={noteItem}
							onDelete={deleteNote}
							onEdit={editNote}
						/>
					);
				})}
			</ItemsContainer>
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ItemsContainer = styled.div`
	width: 90vw;
	padding: 50px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
`;
