import React, { Component } from 'react';
import  Other from './OtherButtons';
class Todo extends Component {
    state = {
        todo:[{id:1,name:"Nouman",value:3},
        {id:2,name:"Misbah",value:1},
        {id:3,name:"Bilal",value:4}]

        ,id:3
      }

      handleIncreament=(counter)=>{
          var todo = [...this.state.todo];
          const index = todo.indexOf(counter);
          console.log(index);
          todo[index]={...counter};
          todo[index].value++;
          this.setState({todo});
      }

      handleDelete=(counter)=>{
        let todo = this.state.todo.filter(d=>counter.id!=d.id);
        console.log(todo)
        this.setState({todo});
          
          
      }
      handleReset(){
       this.state.todo.map(d=>d.value=0);
        // console.log(todo)
        this.setState([this.state.todo])
      }

      handleResetId=(counter)=>{
        var todo = [...this.state.todo];
        const index = todo.indexOf(counter);
        console.log(index);
        todo[index]={...counter};
        todo[index].value=0;
        this.setState({todo});
      }

      handleCreate=()=>{
        var todo = [...this.state.todo];
        let id = this.state.id+1;
        console.log(id);
        todo.push( {id:id,value:0})
         console.log(todo);
         this.setState({id})

        this.setState({todo})
      }

    render() { 
        return (
        <>
         <button onClick={()=>{this.handleReset()}} className="btn btn-primary m-3" >Reset</button>
         <button onClick={()=>{this.handleCreate()}} className="btn btn-primary m-3" >Create</button>
         <br/>
        {this.state.todo.map(d=> < Other key={d.id}  counter={d}  handleIncreaments={(d)=>this.handleIncreament(d)}
         handleDeletes={(d)=>this.handleDelete(d)}
         handleResetID={(d)=>this.handleResetId(d)}
        
        ></ Other>)}       
        </>  );
    }
}
 
export default Todo;