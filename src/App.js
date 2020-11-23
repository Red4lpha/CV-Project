import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
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
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;

//?basic page layout -header - general -education -experience - DONE
//--------
//?General form name, email, phone number - DONE
//todo General form: add github url --extra
//--------
//?Education form: School, Major, Years attended
//--------
//todo Experience form: Company name, position title, date
//todo Experience form: Main tasks of job -- UL with a li for each task
//todo implement add task button for each additional li
//todo move the display render of experience to a new component, so multiple companies can be added
//--------
//?implement submit button
//?implement edit button 
//Extra
//todo Under education, add a + to add more majors

