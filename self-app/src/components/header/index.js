import React, {Component} from 'react'

export default class Header extends Component{
    toDo = 1;
    done = 1;

    render() {
        return(
            <div className="header">
                <h1>My todo app</h1>
                <h4>Need to be done {this.toDo}, done already {this.done}</h4>
            </div>
        )
    }
}