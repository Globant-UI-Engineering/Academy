import React from 'react';

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
            <div className="todoform">
                <form onSubmit={this.handleSubmit}>
                    <label>Title of a new TODO:</label>
                    <input type="text" name="newtodo" value={this.state.newtodo} onChange={this.handleChange} />
                    <input type="submit" value="Add task" />
                </form>
            </div>
        );
    }
}

export default TodoForm;
