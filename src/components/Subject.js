import React, {Component} from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
          <form action="/search_process" method="get" onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(e.target.query.value);
            this.setState({
              mode:'searching'//변경하고 싶은 값을 객체형태로 줌
            });
          }.bind(this)}>
          <h1><span style={{color:"#32cd32", marginRight:'10px'}}>Our</span> 
          <input name="query" type="text" placeholder="검색어를 입력하세요."></input>
          <input type="submit" value="🔍"></input> 
          <span style={{color:"#008b8b", marginLeft:'10px'}}>Po</span></h1>
          
          </form>
        </header>
      );
    }
  }

export default Subject;