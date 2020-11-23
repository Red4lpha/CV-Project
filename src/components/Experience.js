import React from 'react';

class Experience extends React.Component{
    constructor(){
        super();
        this.state = {
            company: "",
            title: "",
            years: 0,
            tasks: "",
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
    handleSubmit(){
        console.log("Exp form submitted");
        this.setState({isSubmitted: true});
        e.preventDefault()
    };
    handleEdit(){

    };
    render(){
        const {company, title, years, tasks} = this.state;
        return(
            <div className="card experience">
                <form className="expForm" onSubmit={this.handleSubmit}>
                    <label for="expCompany" className="label">Company:</label>
                    <input id="expCompany" name ="company" type="text" value={company} onChange={this.handleChange}/>
                    <label for="expTitle" className="label">Title:</label>
                    <input id="expTitle" name ="title" type="text" value={title} onChange={this.handleChange}/>
                    <label for="expYears">Years of Experience:</label>
                    <input id="expYears"  name ="years" type="text" value={years} onChange={this.handleChange}/>
                    <label for="expTasks">Tasks:</label>
                    <input id="expTasks"  name ="tasks" type="text" value={tasks} onChange={this.handleChange}/>
                    <input type="submit" task="Submit"></input>
                </form>
            </div>
        );
    };

};

export default Experience;