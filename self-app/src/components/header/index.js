import React, {Component} from 'react'

export default class Header extends Component {
    toDo = 1;
    done = 1;

    render() {
        const {done, imp} = this.props;
        return (
            <div className="header">
                <h1>My todo app</h1>
                <h4>Need to be done {imp}, done already {done}</h4>
            </div>
        )
    }
}