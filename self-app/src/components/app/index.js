import React, {Component} from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import AddBar from '../add-bar'
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
    ifDeleted = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArr
            }
        })
    };
    ifAdded = (text) => {
        this.setState(({todoData}) => {
            const newItem = this.createElement(text);
            return {
                todoData: [...todoData, newItem]
            }
        });
    };

    render() {
        const {todoData} = this.state;
        return (
            <div className="body">
                <Header/>
                <div className="d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={todoData}
                          ifDelete={this.ifDeleted}
                />
                <AddBar ifAdd={this.ifAdded}/>
            </div>
        )
    }
}