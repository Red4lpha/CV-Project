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
        this.addTask = this.addTask.bind(this);
    };
    handleChange(e){
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        }); 
    };
    handleSubmit(e){
        console.log("Exp form submitted");
        this.setState({isSubmitted: true});
        e.preventDefault();
    };
    handleEdit(){
        this.setState({isSubmitted: false}); 
    };
    addTask(e){
        console.log("addTask clicked");
        e.preventDefault();
    }
    render(){
        const {company, title, years, tasks, isSubmitted} = this.state;
        
        if(isSubmitted){
            return(
                <div className="card experience">
                    <h1>{company}</h1>
                    <span><h3>{title}   --- Years of Experience: <i>{years}</i></h3></span>
                    <ul>
                        <li>{tasks}</li>
                    </ul>
                    <button onClick={this.handleEdit}>EDIT</button>
                </div>
            );
        }
        
        if(!isSubmitted){
            return(
                <div className="card experience">
                    <form className="expForm" onSubmit={this.handleSubmit}>
                        <label for="expCompany" className="label">Company:</label>
                        <input id="expCompany" name ="company" type="text" value={company} onChange={this.handleChange}/>
                        <label for="expTitle" className="label">Title:</label>
                        <input id="expTitle" name ="title" type="text" value={title} onChange={this.handleChange}/>
                        <label for="expYears">Years of Experience:</label>
                        <input id="expYears"  name ="years" type="text" value={years} onChange={this.handleChange}/>
                        <label for="expTasks"><button onClick={this.addTask}>+</button> Tasks:</label>
                        <input id="expTasks"  name ="tasks" type="text" value={tasks} onChange={this.handleChange}/>
                        <input type="submit" task="Submit"></input>
                    </form>
                </div>
            );
        }
    };
};

export default Experience;