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
            this.createElement('lol'),
            this.createElement('kek'),
            this.createElement('some 3')
        ],
        term: '',
        filter: ''
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
search(items, term){
    if (term.length === 0){
        return items;
    }
    return items.filter((item) => {
        return item.label
            .toLowerCase()
            .indexOf(term.toLowerCase())>-1;
    })
}
searchFunc = (term) =>{
    this.setState({term})
};
filter = (items, filter) =>{
    switch (filter) {
        case 'all':
            return items;
        case 'done':
            return items.filter((item)=>item.done);
        case 'active':
            return items.filter((item)=>!item.done);
        default:
            return items;

    }
};
    filterChange = (filter) =>{
        this.setState({filter});
    };

    onToggleImportant=(id)=>{
        console.log(id)
    };
    onToggleDone=(id)=>{
        console.log(id)

    };
    render() {
        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData,term),filter);
        return (
            <div className="body">
                <Header/>
                <div className="d-flex">
                    <SearchPanel searchFunc={this.searchFunc}/>
                    <ItemStatusFilter
                        filter={filter}
                        filterChange={this.filterChange}/>
                </div>
                <TodoList todos={visibleItems}
                          ifDelete={this.ifDeleted}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}
                />
                <AddBar ifAdd={this.ifAdded}/>
            </div>
        )
    }
}