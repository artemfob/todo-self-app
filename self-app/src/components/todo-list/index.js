import React, {Component} from 'react'
import TodoListItem from '../todo-list-item';

export default class TodoList extends Component{

    render() {
        const {todos} = this.props;
        const elements = todos.map((item)=>{
            const {id, ...itemProps} = item;
            return(
                <li key={id}><TodoListItem {...itemProps}/></li>
            )
        });
        return(
            <ul className="list-unstyled">
                {elements}
            </ul>
        )
    }
}