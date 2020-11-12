import React from "react"; 

class General extends React.Component {

    render(){
        return (
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
        );
    }   
};

export default General;