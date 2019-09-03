import React from 'react';
import TodoRow from './TodoRow'
class TodoList extends React.Component {
    constructor(props) {
       super(props);
       let { list, updateList } = props
       this.state = { list, updateList }
   }
   render() {      
       return (
            <div className="todolist">
                <ul>
                   {
                       this.props.updateList.map((item, index) => 
                           <TodoRow item={item} index={index} removeItem={this.props.removeItem}/>
                       )
                   }
               </ul>
           </div>
       );
   }
}

export default TodoList;