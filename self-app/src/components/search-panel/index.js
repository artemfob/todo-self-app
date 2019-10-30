import React, {Component} from 'react';

export default class SearchPanel extends Component{

    render() {
        return(
            <form action="" >
                <input type="text"
                       placeholder='type some text to filter'
                       className="form-control"/>
            </form>
        )
    }
}