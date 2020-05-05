import React from 'react';
import PropTypes from 'prop-types';
import './Note.sass';
import Button from '../Button/Button';

const Note = ({note, onDeleteNote}) => {
  const {id, title, description, date} = note;

  return (
    <div key={id} className="note">
      <h4>{title}</h4>
      <span className="date">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
      <span className="description">{description}</span>
      <Button style={{backgroundColor: "#de5151"}} onClick={() => onDeleteNote(id)}>Delete note</Button>
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  onDeleteNote: PropTypes.func.isRequired
}

export default Note;
