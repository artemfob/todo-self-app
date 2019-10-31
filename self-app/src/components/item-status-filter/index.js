import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {

    render() {
        return (
            <div className='ml-auto'>
                <button className="btn ">All</button>
                <button className="btn ">Active</button>
                <button className="btn ">Done</button>
            </div>
        )
    }
}