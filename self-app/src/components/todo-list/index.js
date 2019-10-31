import React, {Component} from 'react'
import TodoListItem from '../todo-list-item';

export default class TodoList extends Component {

    render() {
        const {todos, ifDelete} = this.props;
        const elements = todos.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id}><TodoListItem {...itemProps}
                                           ifDelete={() => ifDelete(id)}/></li>
            )
        });
        return (
            <ul className="list-unstyled">
                {elements}
            </ul>
        )
    }
}