import React, { Component } from 'react'
//react라는 모듈에서 Component라는 class를 로딩하고,
//이를 Title component가 사용하고 있다.

class Title extends Component {
  render() {
    return (
      <header>
        <h1>What To Do</h1>
        This is todos to get start! Check after done [v]
      </header>
    )
  }
}

//Component 파일 분리시 해줘야 하는 것
export default Title
//그리고 이를 사용하는 곳에는 import Title from './components/Title'이라고 해줌.
