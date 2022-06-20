import React, {Component} from 'react';
import Subject from "./components/Subject";
import Frame from "./components/Frame";
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'main',
      query:'안녕하세요, ourpo입니다!',
      mention:'무엇이 궁금하세요?',
      portal:[{id:1, title:'Google', url:"https://www.google.com/"},
      {id:2, title:'Naver', url:"https://www.naver.com/"},
      {id:3, title:'Daum',url:"https://www.daum.net/"},
      {id:4, title:'Youtube', url:"https://www.youtube.com/"},
      {id:5, title:'Github',url:"https://github.com/"},
      {id:6, title:'op.gg', url:"https://www.op.gg/"},
      {id:7, title:'위키백과', url:"https://www.wikipedia.org/"},
      {id:8, title:'구글 번역기',url:"https://translate.google.co.kr/"},
      {id:9, title:'파파고',url:"https://papago.naver.com/"}, 
    ]
    }
  }
  render(){
    var urlpattern = [];
    if(this.state.mode === 'main'){
      var i=0;
      while(i<this.state.portal.length){
        var data = this.state.portal[i].url;
        urlpattern[i] = data;
        i=i+1;
      }
    } else if(this.state.mode === 'searching'){
      var k=0;
      while(k<this.state.portal.length){
        var urll=this.state.portal[k].url;
        var id=this.state.portal[k].id;
        var check_eng = /[a-zA-Z]/;
        if(id===1||id===5){
          urlpattern[k] = urll+'search?q='+this.state.query;
        } else if(id===2){
          urlpattern[k] = 'https://search.naver.com/search.naver?query='+this.state.query;
        } else if(id===3){
          urlpattern[k] = "https://search.daum.net/search?w=tot&q="+this.state.query;
        } else if(id===4){
          urlpattern[k]=urll+'results?search_query='+this.state.query;
        } else if(id===6){
          urlpattern[k]=urll+'summoners/kr/'+this.state.query;
        } else if(id===7){
          urlpattern[k]="https://ko.wikipedia.org/wiki/"+this.state.query;
        } else{
          if(check_eng.test(this.state.query)){
            if(id===8){//google번역기
              urlpattern[k]=urll+"?hl=ko&sl=en%tl=ko&text="+this.state.query+"&op = translate";
            }
            else if(id===9){
              urlpattern[k]=urll+"?sk=auto&tk=ko&hn=0&st="+this.state.query;
            }
          }
          else{//한글->영어 일 때
            if(id===8){
              urlpattern[k]=urll+"?hl=ko&sl=auto&tl=en&text="+this.state.query+"&op=translate";
            }
            else if(id===9){
              urlpattern[k]=urll+"?sk=auto&tk=en&st="+this.state.query;
            }
          }
        }
        k=k+1;
      }
    }
    return (
      <div className="App">
        <Subject ment={this.state.mention} onSubmit={function(_query){
          this.setState({mode:'searching',query:_query,mention:'이제 원하는 사이트에 들어가 보세요!'});
        }.bind(this)}></Subject>
        <Frame data={this.state.portal} urldata={urlpattern}></Frame>
      </div>
    );
  }
}

export default App;
