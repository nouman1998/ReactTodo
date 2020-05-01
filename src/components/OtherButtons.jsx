import React, { Component } from 'react';
class Other extends Component {
    state = {  }
    render() { 
        return (
         <>
         <label className="m-4">{this.props.counter.value}</label>
            <button onClick={()=>{this.props.handleIncreaments(this.props.counter)}} className="btn btn-primary m-4">ADD</button>
            <button onClick={()=>{this.props.handleDeletes(this.props.counter)}} className="btn btn-danger m-4">Delete</button>
            <button onClick={()=>{this.props.handleResetID(this.props.counter)}} className="btn btn-success m-4">Reset</button>

            <br/>
        </> );
    }
}
 
export default Other;