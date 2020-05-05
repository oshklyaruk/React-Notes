import {
  DELETE_NOTE,
  ADD_NOTE,
} from '../actions/noteListTypes';

const initialState = {
  noteList: [
    {
      id: 1,
      title: "Buy food",
      description: "Apples, bananas, oranges",
      date: new Date(2020, 4, 1)
    },
    {
      id: 2,
      title: "Meeting",
      description: "Arrange the meeting",
      date: new Date(2020, 4, 3)
    },
    {
      id: 3,
      title:
        "Make a call",
      description:
        "Call Tom",
      date:
        new Date(2020, 4, 4 )
    }
  ]
};

const noteList = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter(note => note.id !== action.id)
      };
    case ADD_NOTE:
      return {
        ...state,
        noteList: [...state.noteList, action.note]
      };
    default:
      return state
  }
}

export default noteList;
