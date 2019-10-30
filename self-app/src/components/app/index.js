import React, {Component} from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
// import AddBar from '../add-bar'
import './index.css';

export default class App extends Component {
    maxId = 1;

    createElement = (text) => {
        return {
            label: text,
            important: false,
            done: false,
            id: this.maxId++
        }
    };

    state = {
        todoData: [
            this.createElement('some 1'),
            this.createElement('some 2'),
            this.createElement('some 3')
        ]
    };


    render() {
        const {todoData} = this.state;
        return (
            <div className="body">
                <Header/>
                <div className="d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                    {/*<AddBar/>*/}
                </div>
                <TodoList todos={todoData}/>
            </div>
        )
    }
}