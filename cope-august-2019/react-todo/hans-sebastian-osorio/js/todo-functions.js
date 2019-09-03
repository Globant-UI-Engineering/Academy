const domContainer = document.querySelector('#root');

class TodoRow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
    }
    deleteRow(id, index) {
        this.props.removeItem({id: parseInt(id), index: parseInt(index)});
    }
    render() {
        const {item, index} = this.props;
        const stateItem = item.state == 'init' ?
            <span style={{color: 'gray'}}>
                {item.title}
            </span> :
            <span style={{color: 'green'}}>
                {item.title}
            </span>;

        return (
            <li key={item.id}>
                {stateItem}
                {item.description}
                <button onClick={(e) => this.deleteRow(item.id, index)}>-</button>
            </li>
        );
    }
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newtodo: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({newtodo: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.newtodo) {
            this.props.addItem({newItem: this.state.newtodo});
            //this.refs.form.reset();
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title of TODO:</label>
                    <input type="text" name="newtodo" value={this.state.newtodo} onChange={this.handleChange} />
                    <input type="submit" value="Add task" />
                </form>
            </div>
        );
    }
}
class TodoList extends React.Component {
     constructor(props) {
        super(props);
        let { list, updateList } = props
        this.state = { list, updateList }
    }
    render() {      
        return (
            <div>
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
var todoListInit = [
    { title: 'Wake up', state: 'init', id: 1 },
    { title: 'Tidy room', state: 'init', id: 2 },
    { title: 'Take a shower', state: 'init', id: 3 },
    { title: 'Prepare breakfast', state: 'init', id: 4 }
]
class App extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.state = {
            todoList: this.props.initList
        };
    }

    addItem( todoItem ) {
        let _todoList = this.state.todoList
        _todoList.unshift({
            id: _todoList.length + 1, 
            title: todoItem.newItem, 
            state: 'init'
        });
        this.setState({todoList: _todoList});
    }
    removeItem({ id, index }) {
        let _todoList = []
        for (let i = 0; i < this.state.todoList.length; i++) {
            if (i != index) {
                _todoList.push(this.state.todoList[i]);
            }
        }
        this.setState({todoList: _todoList});
    }
    render() {
        return (
            <div>
                <h1 className="title">Welcome to this TODO App</h1>
                <TodoForm addItem={this.addItem} />
                <TodoList list={this.props.initList} updateList={this.state.todoList} removeItem={this.removeItem} />
            </div>
        );
    }
}

ReactDOM.render(
    <App initList={todoListInit}/>,
    domContainer
);