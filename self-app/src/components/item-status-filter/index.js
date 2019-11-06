import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
   ];

    render() {
        const {filter, filterChange} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
           const active = filter === name;
           const classNames = active ? 'btn-info': 'btn-outline-secondary';
            return(
               <button key={name}
                       type='button'
                       className={`btn ${classNames}`}
                       onClick={()=>filterChange(name)}
               > {label}</button>
           )
        });
        return (
            <div className='ml-auto'>
                {buttons}
            </div>
        )
    }
}