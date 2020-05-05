import React from 'react';
import './NoteList.sass';
import Note from '../components/Note/Note'
import Button from '../components/Button/Button'
import NoteCreator from '../components/NoteCreator/NoteCreator'

let list = [
  {
    id: 1,
    title: "Buy food",
    description: "Apples, bananas, oranges",
    date: new Date()
  },
  {
    id: 2,
    title: "Meeting",
    description: "Arrange the meeting",
    date: new Date()
  },
  {
    id: 3,
    title: "Make a call",
    description: "Call Tom",
    date: new Date()
  },

]

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCreateNoteForm: false,
      noteList: list
    }
  }

  handleShowCreateNoteForm = () => {
    this.setState({
      showCreateNoteForm: true
    })
  };

  handleCreateNote = (note) => {
    console.log(note);
  };

  handleDeleteNote = (id) => {
    console.log(id);
  };

  render() {
    const {showCreateNoteForm, noteList} = this.state;
    return (
      <div className="note-list">
        <h1>To Do list</h1>
        {
          !showCreateNoteForm
            ? <Button onClick={this.handleShowCreateNoteForm}>Create new note</Button>
            : <NoteCreator createNote={this.handleCreateNote}/>
        }
        {
          noteList.map(note => (
            <Note key={note.id} note={note} onDeleteNote={this.handleDeleteNote}/>
          ))
        }
      </div>
    )
  }
}

export default NoteList;
