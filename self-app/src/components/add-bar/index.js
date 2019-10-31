import React, {Component} from 'react'

export default class AddBar extends Component {
    state = {
        label: ''
    };
    inputChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    ifSubmit = (e) => {
        e.preventDefault();
        this.props.ifAdd(this.state.label);
        this.setState({
            label: ''
        })

    };

    render() {
        return (
            <form onSubmit={this.ifSubmit}
                  className='d-flex'>
                <input type="text" placeholder='write to add'
                       className='form-control'
                       style={{width: '250px'}}
                       onChange={this.inputChange}
                       value={this.state.label}/>
                <button className="btn btn-outline-info ml-auto"
                >Click to add
                </button>
            </form>
        )
    }
}