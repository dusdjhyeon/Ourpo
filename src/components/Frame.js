import React, {Component} from 'react';

class Frame extends Component{
    render(){
      var lists=[];
      var data=this.props.data;
      var urlpattern=this.props.urldata;
      
      var i=0;

      while(i<data.length){
        var urlimg = "portal/" + data[i].title + ".png";
        lists.push(<li style={{float:"left",marginRight:"39px"}} key={data[i].id}>
          <a href={urlpattern[i]}><img style={{paddingTop:"20px",height:"77px",width:"77px"}} src={urlimg}></img>
          <br></br>{data[i].title}</a>
          {i%5===1 ? <br></br>: null}
        </li>)
        i=i+1;
      }

      return (
        <ul style={{listStyle:"none"}}>
          {lists}
        </ul>
      );
    }
  }

export default Frame;