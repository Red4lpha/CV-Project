import React from "react"; 

class General extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fName: "",
            lName: "",
            email: "",
            phone: "000-000-0000",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(e){
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        });    
    };
    handleSubmit(e){
        console.log("handleSubmit hit");
        console.log("fname:" + this.state.fName);
        console.log("lname:" + this.state.lName);
        console.log("email:" + this.state.email);
        console.log("num:" + this.state.phone);
        e.preventDefault();
    };

    render(){
        const {fName, lName, email, phone} = this.state;
        return (
            <div className="card general">
                <form className="genForm" onSubmit={this.handleSubmit}>
                    <label for="genFirstName" className="label">First Name:</label>
                    <input id="genFirstName" name ="fName" type="text" value={fName} onChange={this.handleChange}/>
                    <label for="genLastName" className="label">Last Name:</label>
                    <input id="genLastName" name ="lName" type="text" value={lName} onChange={this.handleChange}/>
                    <label for="genEmail">Email:</label>
                    <input id="genEmail"  name ="email" type="text" value={email} onChange={this.handleChange}/>
                    <label for="genPhnoe">Phone Number:</label>
                    <input id="genPhone"  name ="phone" type="text" value={phone} onChange={this.handleChange}/>
                    <input type="submit" task="Submit"></input>
                </form>
            </div>
        );
    }   
};

export default General;