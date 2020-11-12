import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

  };
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>CV Creator</h1>
        </div>
        <div className="main">
          <div className="card general">
            <form className="genForm" action="">
              <label for="genFirstName" className="label">First Name:</label>
              <input id="genFirstName" type="text"/>
              <label for="genLastName" className="label">Last Name:</label>
              <input id="genLastName" type="text" />
              <label for="genEmail">Email:</label>
              <input id="genEmail" type="text" />
              <label for="genPhnoe">Phone Number:</label>
              <input id="genPhone" type="text" />
              <button>Submit</button>
            </form>
          </div>
          <div className="card education">
            Education
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//todo basic page layout -header - general -education -experience
//--------
//todo General form name, email, phone number
//todo General form: add github url --extra
//--------
//todo Education form: School, Major, Years attended
//--------
//todo Experience form: Company name, position title, date
//todo Experience form: Main tasks of job -- UL with a li for each task
  //todo implement add task button for each additional li
//--------
//todo implement submit button
//todo implement edit button 

