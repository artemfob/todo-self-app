Для того чтоб создать собственные события, нужно просчитать всю иерархию, где это событие должно пройти
Для примера, функционал удалени проходит через:
    App {ifDel = {this.onDel}
Далее передаем ifDel через пропс в туду лист
    {ifDel} = this.props;
    whenDel = {()=>ifDel(id);
И аналогично передаем эту функцию в туду лист айтем и вешаем обработчик событий онКлик
    {whenDel} = this.props;
    onClick = {whenDel}
    
    Realisation searchPanel
    
    App add state 'term: " "'
    add const visibleItems = this.search(todoData, term)
    comp SearchPanel searchFunc = {this.searchFunc}
    
    func searchFunc = (term) =>{
        this.setState({term});
        };
    
    func search (items, term){
        if (term.length === 0){
            return items;}
        return items.filter((item)=>{
            return item.label
            .toLowerCase()
            .indexOf(term.toLowerCase())>-1;
            });
            
     
     SearchPanel add state 'term: " "'
     searchFunc =(e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.searchFunc(term);
        };
        
     input add value and e.listener [
         value={this.state.term}
         onChange={this.searchFunc}]