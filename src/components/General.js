import React from "react"; 

class General extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fName: "",
            lName: "",
            email: "",
            phone: "000-000-0000",
            isSubmitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    };
    handleChange(e){
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        });    
    };
    handleSubmit(e){
        console.log("General handleSubmit hit");
        this.setState({isSubmitted: true});
        e.preventDefault();
    };
    handleEdit(e){
        this.setState({isSubmitted: false});
    }

    render(){
        const {fName, lName, email, phone, isSubmitted} = this.state;
        if(isSubmitted){
            return(
                <div className="card general">
                    <h1> {fName} {lName} </h1>
                    <p> {email}</p>
                    <p> {phone} </p>
                    <button onClick={this.handleEdit}>EDIT</button>
                </div>
            );
        }

        if(!isSubmitted){
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
    }   
};

export default General;