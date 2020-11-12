import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import General from './components/General';

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
          <General />
          <div className="card education">
            Education
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//?basic page layout -header - general -education -experience - DONE
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

