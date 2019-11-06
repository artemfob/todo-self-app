import React, {Component} from 'react';

export default class SearchPanel extends Component {

    state = {
        term: '',
    };

    searchFunc = (e) =>{
      const term = e.target.value;
      this.setState({term});
      this.props.searchFunc(term);
    };

    render() {

        return (
            <form action="">
                <input type="text"
                       placeholder='type some text to filter'
                       className="form-control"
                        value={this.state.term}
                       onChange={this.searchFunc}
                />
            </form>
        )
    }
}