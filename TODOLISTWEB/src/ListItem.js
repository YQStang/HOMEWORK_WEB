import React, { Component } from "react";
import "./ListItem.css";
class ListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isClickable: true,
            color:"black"
        }
    }
    ItemButtonClick = (e) => {
        this.setState({ isClickable: false, color: "gray" })       
    }
    render(){
        const style = {
            color:this.state.color
        }
        const item = this.props.item;
        if (item.done){
            return <p><button className = "done-item" disabled >{item.content}</button></p>
        }else{
            return <p><button className = "item" onClick = {this.ItemButtonClick} disabled={!this.state.isClickable} style={style}>{item.content}</button></p>
        }
    }
}


export default ListItem