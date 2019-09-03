import React ,{Component} from 'react';
import Addtask from '../components/addTask/addTask';
import TaskList from '../components/taskList/taskList';
import './App.css';

class App extends Component {

  state={
    taskList:[]
  }

  handleSaveButton=()=>{
    const newValue=document.getElementById('input_homework').value;
    this.saveTask(newValue)
  }

  handleEnterKey=(event)=>{
    if(event.keyCode===13){
      const newValue=document.getElementById('input_homework').value;
      this.saveTask(newValue)
    }
  }

  handleDeleteTask=(position)=>{
    const arrTemp=[...this.state.taskList];
    arrTemp.splice(position,1);
    this.setState({ taskList:arrTemp});
  }

  handleStateTask=(position)=>{

      this.setState((prevState)=>{
        const arrTemp=[...prevState.taskList];
        arrTemp[position].stateCheckbox=!arrTemp[position].stateCheckbox;
        return{
          taskList:arrTemp
        }
      })
  }

  saveTask(newValue){
    if(newValue!==""){
      this.setState({
        taskList:[...this.state.taskList,{name:newValue,stateCheckbox:false}]
      })
      document.getElementById('input_homework').value="";
    }
  }

  render() { 
      return (
      <div className="App"> 
        <Addtask addhomework={this.handleSaveButton} addhomeworkEnterkey={(event)=>this.handleEnterKey(event)}/>
        <div className="listContainer">
          <TaskList taskList={this.state.taskList} deleteTask={this.handleDeleteTask} changeState={this.handleStateTask} />
        </div>
      </div>
    );
  }

}

export default App;
