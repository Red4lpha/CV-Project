import React from "react";

class Education extends React.Component{
    constructor(){
        super();
        this.state = {
            school: "",
            major: "",
            gradYear:"",
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
        console.log("Edu form submitted");
        this.setState({isSubmitted: true});
        e.preventDefault()
    };
    handleEdit(){
        this.setState({isSubmitted: false});
    };


    render(){
        const {school, major, gradYear, isSubmitted} = this.state;
        
        
        if(isSubmitted){
            return(
                <div className="card education">
                    <h1>{school}</h1>
                    <h2>{major}</h2>
                    <h3>{gradYear}</h3>
                    <button onClick={this.handleEdit}>EDIT</button>
                </div>
            );
        }
        if(!isSubmitted){
            return(
                <div className="card education">
                    <form className="eduForm" onSubmit={this.handleSubmit}>
                        <label for="eduSchool" className="label">School:</label>
                        <input id="eduSchool" name ="school" type="text" value={school} onChange={this.handleChange}/>
                        <label for="eduMajor" className="label">Major:</label>
                        <input id="eduMajor" name ="major" type="text" value={major} onChange={this.handleChange}/>
                        <label for="eduYear">Year Graduated:</label>
                        <input id="eduYear"  name ="gradYear" type="date" value={gradYear} onChange={this.handleChange}/>
                        <input type="submit" task="Submit"></input>
                    </form>
                </div>
            );
        }
    }

};

export default Education;