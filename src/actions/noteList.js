import {
  DELETE_NOTE,
  ADD_NOTE,
} from './noteListTypes';

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id
});

export const addNote = note => ({
  type: ADD_NOTE,
  note
});;
