import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';
import myFirebase from '../utility/MyFirebase';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
    this.firebaseDBRef = myFirebase.getFirebaseRef();
    this.firebaseDBRef.once('value').then((snapshot) => {
      console.log(snapshot.val());
    });
  }

// Rest of Board.js


// you will always need to import React from react
// Import {component} when building a class component


addNote() {
  let notes = this.state.notes;
  notes.push(
    {
      id: Date.now()
    }
  );
  this.setState(
    {
      notes: this.state.notes
    }
  );
}

// // passing in the id of the notecard from which the 'delete button' was clicked
deleteNote(id){
  // // creating a new var that holds current notes
  let newNoteArr = this.state.notes;
  // // mapping through array of all notes that's saved in our state, passing in the current note along with the index of that current note
  newNoteArr.map((note, index) => {
    // at ever note (from the array in our state) we check to see if the id passed in matches the id of the note we're currently on
    if (id === note.id) {
      // // if it matches we're removing just one item from that array
      newNoteArr.splice(index,1);
    }
  });
  // // our array now has the same elements minus the one we just deleted
  // // update our state to show that new array which will trigger a re-render
  this.setState(
    {
      notes: newNoteArr
    }
  );
}


// render method - render what is returned from JSX onto the  browser
render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
          {
            
              this.state.notes.map(item => {
                return <Note title={item.title} body={item.body} key={item.id} id={item.id} deleteHandler={this.deleteNote.bind(this)}/>
              })
          }
          {/* <Note title="Class Notes" body="Always use constructors when extending another class"/> */}
            {/* <Note title="My New Address" body="2001 N Lonhill Phoenix, AZ 81234"/>
                    <Note title="React Notes" body="Everything in React is a component" />
                    <Note  /> */}
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default Board;

