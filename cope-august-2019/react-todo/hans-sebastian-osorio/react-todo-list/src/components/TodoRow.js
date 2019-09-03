import React from 'react';

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

export default TodoRow;