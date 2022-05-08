import { Component } from 'react';
import icon from './pencil.png';
import imageThree from './trash-4.png';

export class List extends Component {
    constructor(){
        super();
        this.state = {
            userInput : "",
            list: []
        }
    }


    onChangeEvent(event){
        this.setState({
            userInput: event
        })
        // console.log(event)
    }

    addItem(input){
        if (input === "") {
            alert('Please, enter an item')
        }
        else {
            let listArray = this.state.list;
        listArray.push(input);
        this.setState({glist: listArray, userInput: ''})
        }
    }

    
    deleteItem(){
        let listArray = this.state.list;
        listArray.length = 0;
        this.setState({
            list: listArray
        })
    }

     crosseWord(event){
        const liItem = event.target;
        liItem.classList.toggle('crossed');
     }
    
     onFormSubmit(e){
         e.preventDefault();
     }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div>
                <input type="text"
                placeholder='Whrite here...' 
                onChange={ (e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
                <button className='btn-add' onClick={ ()=> this.addItem(this.state.userInput) }>ADD</button> 
            </div>
            <div>
            <ul>
                {this.state.list.map((item, index) => (
                    <li key={index} onClick={this.crosseWord}>
                        <img src={icon} alt="icon to do list" width="25px" />
                        {item}</li>
                ))}
            </ul>
            </div>
            <div className='App-box'>
                <button className='btn-del' onClick={()=> this.deleteItem()}><img src={imageThree} alt="trash bin" width="25px"/></button>
            </div>
            </form>
            </div>
        )
    }

}
