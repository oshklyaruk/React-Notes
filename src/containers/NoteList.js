import React from 'react';
import './NoteList.sass';
import Note from '../components/Note/Note'
import Button from '../components/Button/Button'

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




  render() {
    const {showCreateNoteForm, noteList} = this.state;
    return (
      <div>
        {
          !showCreateNoteForm
            ? <Button onClick={this.handleShowCreateNoteForm}>Create new note</Button>
            : null
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
