import React, {Fragment} from 'react';
import ExpViewerButton from './ExpViewerButton';

class ExpViewer extends React.Component {
    constructor(){
        super();
        const plusBtn = () => <button onClick={this.addTask}>+</button>;
        this.state = {
            company: "",
            title: "",
            years: 0,
            firstTask: "",
            tasks: [{
                key: 0,
                context: "",
                button: true,
            },],
            isSubmitted: false,
        };
       /*  this.addBtn = this.addBtn.bind(this); */
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleTasksChange = this.handleTasksChange.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    };
    handleChange(e){
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        }); 
    };
    handleTasksChange(e){
   /*      const i = e.target.name;
        const value = e.target.value;
        let tasks = [...this.state.tasks];
        tasks[i] = {...tasks[i], key: i, context: value};
        this.setState({ tasks }); */
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
        let tasks = [...this.state.tasks];
        let i = tasks.length;
        tasks[i] = {...tasks[i], key: i, context: "", button: true};
        tasks[i-1] = {...tasks[i-1], button: false};
        this.setState({ tasks });
        
        e.preventDefault();
    }
    deleteTask(e){
        let tasks = [...this.state.tasks];
        let i = tasks.length;
        if (i !== -1) {
            tasks.pop();
            tasks[i-2] = {...tasks[i-2], button: true};
            this.setState( {tasks} );
        }
        console.log("length: " + i);
        console.log("deleteTask clicked ");
        e.preventDefault();
    }
    
    render() {
        const {company, title, years, tasks, isSubmitted, firstTask} = this.state;
        
        /*         if(isSubmitted){
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
                } */
        
        
        return (
            <div className="card experience">
                <form className="expForm" onSubmit={null}>
                    <label for="expCompany" className="label">Company:</label>
                    <input id="expCompany" name ="company" type="text" value={company} onChange={this.handleChange}/>
                    <label for="expTitle" className="label">Title:</label>
                    <input id="expTitle" name ="title" type="text" value={title} onChange={this.handleChange}/>
                    <label for="expYears">Years of Experience:</label>
                    <input id="expYears"  name ="years" type="text" value={years} onChange={this.handleChange}/>
                    <label for="firstTask"><button onClick={this.addTask}>+</button>Tasks:</label>
                    <input id="firstTask"  name ="firstTask" type="text" value={firstTask} onChange={this.handleChange}/>
                    {tasks.map((task) => {
                        return (
                            <Fragment>
                                <label for="expTasks{task.key}" key={task.key}> 
                                {/* <ExpViewerButton task={task} deleteTask={this.deleteTask}/>Tasks:</label> */}
                                <ExpViewerButton task={task} onClick={this.deleteTask.bind(this)}/>Tasks:</label>
                                <input id="expTasks{task.key}"  
                                key={task.key}
                                name={task.key}
                                type="text" 
                                value={task.context} 
                                onChange={null}
                                />
                            </Fragment>
                        );
                    })} 
                    <input type="submit" task="Submit"></input>
                </form>
            </div>
         );
    };
};

/* this.deleteTask.bind(this) */
export default ExpViewer;