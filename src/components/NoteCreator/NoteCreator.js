import React from 'react';
import './NoteCreator.sass';
import Input from "../Input/Input";
import Button from "../Button/Button";

class NoteCreator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
    }
  }

  handleCreateNote = () => {
    let {title, description} = this.state;

    let newNote = {
      title,
      description,
      date: new Date(),
      id: this.generateUniqueId()
    };
    this.props.createNote(newNote);
  };

  handleTitleChange = ({target}) => {
    this.setState({
      title: target.value
    });
  };

  handleDescriptionChange = ({target}) => {
    this.setState({
      description: target.value
    });
  };

  generateUniqueId() {
    return Math.floor(Math.random() * 10000);
  }

  render() {
    const {title, description} = this.state;
    return (
        <div className="note-creator">
          <h3>Create new note</h3>
          <Input placeholder="Title" value={title} onChange={this.handleTitleChange}/>
          <textarea placeholder="Description" value={description} onChange={this.handleDescriptionChange}/>
          <Button onClick={this.handleCreateNote}>Create</Button>
        </div>
    )
  }
}

export default NoteCreator;
