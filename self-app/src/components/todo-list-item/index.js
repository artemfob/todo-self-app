import React, {Component} from 'react';
import './index.css'

export default class TodoListItem extends Component{


    render() {
        const {label, ifDelete} = this.props;
        return(
            <div className="d-flex todo-item">
                <span >
                {label}
                </span>
                <div className="btns ml-auto">
                    <button className="btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation"> </i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={ifDelete}>
                        <i className='fa fa-trash'> </i>
                    </button>
                </div>
            </div>
        )
    }
}