import React from 'react';
import './Note.sass';
import Button from '../Button/Button';

const Note = ({ note, onDeleteNote }) => {
  const { id, title, description, date } = note;

  return (
      <div key={id} className="note">
        <span className="title">{title}</span>
        <span className="date">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</span>
        <span className="description">{description}</span>
        <Button style={{ backgroundColor: "#de5151"}} onClick={() => onDeleteNote(id)}>Delete note</Button>
      </div>
  )
}

export default Note;
