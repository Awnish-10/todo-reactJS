import './App.css';
import { useState } from 'react';
import DisplayListItem from './components/DisplayListItem';
import AddItem from './components/AddItem';

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

	return (
		<div>
			<AddItem onAdd={addNote} />
			{notes.map((noteItem, index) => {
				return (
					<DisplayListItem
						key={index}
						id={index}
						content={noteItem}
						onDelete={deleteNote}
					/>
				);
			})}
		</div>
	);
}

export default App;
