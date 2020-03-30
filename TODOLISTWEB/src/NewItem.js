import React, { Component } from "react";
import "./NewItem.css"
class NewItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputContent:''
        }
    }
    onInputChange = (event) => {
        this.setState({
            inputContent:event.target.value
        })
    }
    onAddBtnClick = () => {
        if (this.state.inputContent){
            this.props.addItem(this.state.inputContent)
            this.setState({
                inputContent:''
            })
        }     
    }
    render(){
        return(
            <div class = "newPlace">
                <input class = "newInput" value = {this.state.inputContent} onChange = {this.onInputChange}/>
                <button class = "addBtn" onClick = {this.onAddBtnClick}>Add</button>
            </div>    
        )
    }
}
export default NewItem;