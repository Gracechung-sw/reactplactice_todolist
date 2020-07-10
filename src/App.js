import React, { Component } from 'react'
import './App.css'
import Title from './components/Title'
import Schedule from './components/Schedule'
import Mantra from './components/Mantra'
import Todos from './components/Todos'

/*
class [Component이름] extends Component {
  render() {
    return (
     
    )
  }
}
*/

class App extends Component {
  //App이라는 Component를 만들겠다.
  //이렇게 Class의 상속 형태로 만들어지는 것의 의미는,
  //'React의 Component 클래스를 상속받아서 App이라는 새로운 클래스를 만들거고,
  //이 App 클래스는 render라는 메소드를 가진다.' 이다.
  render() {
    return (
      <div className="App">
        <Title title="What To Do" sub="This is todos to get start! Check after done [v]"></Title>
        <Schedule></Schedule>
        <Mantra
          docs="believe in whatever choices I made trust myself for making that decision and just push
        through straight away!!"
        ></Mantra>
        {/* <Todos></Todos> */}
      </div>
    )
  }
}

export default App
