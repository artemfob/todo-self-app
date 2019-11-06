import React, {Component} from 'react';
import './index.css'

export default class TodoListItem extends Component {


    render() {
        const {label, ifDelete, done, important, onToggleImportant, onToggleDone} = this.props;
        let clazzName = 'todo-list-item';
        if(done){
            clazzName+=' done'
        }
        if(important){
            clazzName+=' important'
        }

        return (
            <div className="d-flex todo-item">
                <span className={clazzName}
                    onClick={onToggleDone}>
                {label}
                </span>
                <div className="btns ml-auto">
                    <button className="btn btn-outline-success btn-sm"
                    onClick={onToggleImportant}>
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