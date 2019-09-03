import React,{ Component } from 'react';
import Cards from '../components/Cards/Cards.js'
import './App.css';

class App extends Component {
  state={
      newTask:{'id':'',
               'name':'',
               'startDate':'',
               'endDate':''},
      cards:[],
      cardsDone:[]
  };

  newTaskChangedHandler=(event)=>{
    let newTask=this.state.newTask;
    if(event.target.id==='new_task'){
        newTask.name=event.target.value;
    }
    if(event.target.id==='start_date'){
        newTask.startDate=event.target.value;
    }
    if(event.target.id==='end_date'){
        newTask.endDate=event.target.value;
    }
    this.setState({newTask:newTask});
  };

  addCard=()=>{
      if (this.state.newTask.name !== '') {
        const inputTask=this.state.newTask;
        inputTask["id"]=this.state.cards.length;
        const cards=[...this.state.cards, inputTask];
        this.setState({
          newTask:{id:'',
                    name:'',
                    startDate:'',
                    endDate:''},
          cards:cards
        }); 
      }
  };

  doneCardHandler=(id,type)=>{
    const cardIndex=this.state.cards.findIndex(c=>{
      return  c.id===id;
    });
    const card={...this.state.cards[cardIndex]};
    this.deleteCardHandler(id,type);
    card.id=this.state.cardsDone.length;
    const cardsDone=[...this.state.cardsDone, card];
        this.setState({
          newTask:{id:'',
                    name:'',
                    startDate:'',
                    endDate:''},
          cardsDone:cardsDone
      });
  };

  deleteCardHandler=(cardIndex,type)=>{
    if(type==='doing'){
       const cards=[...this.state.cards];
        cards.splice(cardIndex,1);
        this.reorganize(cards);
        this.setState({cards:cards})

      }else if(type==='done'){
       const cards=[...this.state.cardsDone];
        cards.splice(cardIndex,1);
        this.reorganize(cards);
        this.setState({cardsDone:cards})
    }
  };

  reorganize=(array)=>{
    return array.map((card,index)=>{
         card.id=index;
         return card;
    });
  };

  backCardHandler=(id,type)=>{
    const cardIndex=this.state.cardsDone.findIndex(c=>{
      return  c.id===id;
    });
    const card={...this.state.cardsDone[cardIndex]};
    this.deleteCardHandler(id,type);
    card.id=this.state.cards.length;
    const cards=[...this.state.cards, card];
    this.setState({
          cards:cards
    });
  }

  render(){
    return (
      <div className="App">
          <header><h1>TO-DO LIST</h1></header>
          <div className="container">
             <div className="input-container">
                <div className="input-section">
                  <h2>NEW TASK</h2>
                  <label htmlFor="new_task">Task:</label>
                  <input type="text" id="new_task" name="new_task" value={this.state.newTask.name} onChange={this.newTaskChangedHandler} placeholder="New task.." required/>

                   <label htmlFor="start_date">Start date:</label>
                  <input type="date" id="start_date" value={this.state.newTask.startDate} onChange={this.newTaskChangedHandler} name="start_date"/>

                  <label htmlFor="end_date">End date:</label>
                  <input type="date" id="end_date" value={this.state.newTask.endDate} onChange={this.newTaskChangedHandler} name="end_date"/>
                
                  <input type="submit" value="ADD"  onClick={this.addCard} />
                </div>
             </div>
             <div className="cards-container">
               <h2>DOING</h2>
                <Cards
                arrayCards={this.state.cards}
                deleteClick={this.deleteCardHandler}
                doneClick={this.doneCardHandler}
                type="doing"
                />
             </div>

             <div className="cards-container">
                <h2>DONE</h2>
                <Cards
                arrayCards={this.state.cardsDone}
                deleteClick={this.deleteCardHandler}
                type="done"
                backClick={this.backCardHandler}
                />
             </div>
          </div>
      </div>
    );
  }
}

export default App;
