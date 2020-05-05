import React from 'react';
import { connect } from 'react-redux'
import { deleteNote, addNote } from '../../actions/noteList'
import './NoteList.sass';
import Note from '../../components/Note/Note'
import Button from '../../components/Button/Button'
import NoteCreator from '../../components/NoteCreator/NoteCreator'

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCreateNoteForm: false
    }
  }

  handleShowCreateNoteForm = () => {
    this.setState({
      showCreateNoteForm: true
    })
  };

  handleCreateNote = (note) => {
    this.props.addNote(note);
    this.setState({
      showCreateNoteForm: false
    })
  };

  handleDeleteNote = (id) => {
    this.props.deleteNote(id);
  };

  render() {
    const {showCreateNoteForm} = this.state;
    const {noteList} = this.props;

    return (
      <div className="note-list">
        <h1>To Do list</h1>
        <div className="note-list-form">
        {
          !showCreateNoteForm
            ? <Button onClick={this.handleShowCreateNoteForm}>Create new note</Button>
            : <NoteCreator createNote={this.handleCreateNote}/>
        }
        </div>
        {
          noteList.map(note => (
            <Note key={note.id} note={note} onDeleteNote={this.handleDeleteNote}/>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  noteList: state.noteList.noteList
})

const mapDispatchToProps = dispatch => ({
  deleteNote: id => dispatch(deleteNote(id)),
  addNote: note => dispatch(addNote(note)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
