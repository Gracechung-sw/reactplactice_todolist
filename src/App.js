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
  constructor(props) {
    super(props)
    this.state = {
      title: {
        titleTitle: 'What To Do',
        sub: 'This is todos to get start! Check after done [v]',
      },
      // mantra: {
      //   docs:
      //     'believe in whatever choices I made trust myself for making that decision and just push through straight away!!',
      // },
      mantra: [
        { mantraid: 1, docs: 'Practice Kindness' },
        { mantraid: 2, docs: 'Remember who you are.' },
        { mantraid: 3, docs: 'Be happy.' },
        { mantraid: 4, docs: 'Life happens now.' },
        { mantraid: 5, docs: 'Plan for victory, learn from defeat.' },
        { mantraid: 6, docs: 'You are capable of wonderful things.' },
        { mantraid: 7, docs: 'Wonder begets wisdom.' },
        { mantraid: 8, docs: 'Express yourself.' },
        { mantraid: 9, docs: 'Never stop dreaming.' },
        { mantraid: 10, docs: 'Change can happen now' },
        { mantraid: 11, docs: 'Accept and embrace all experiences.' },
        { mantraid: 12, docs: 'Do more of what makes you happy.' },
        { mantraid: 13, docs: 'Illuminate the beauty in others.' },
        { mantraid: 14, docs: 'Let your light shine.' },
        { mantraid: 15, docs: 'You are creative.' },
        { mantraid: 16, docs: 'Follow your passion.' },
        { mantraid: 17, docs: 'Judge less, accept more.' },
        { mantraid: 18, docs: 'Start with optimism.' },
        { mantraid: 19, docs: 'All is well.' },
      ],
      scheduleDay: [
        // 복수의 앨리먼트를 생성할 때는 key라는 특수한 props를 사용해야 합니다.
        { id: 1, title: 'Monday', docs: 'Today is Monday!' },
        { id: 2, title: 'Tuesday', docs: 'Today is Tuesday!' },
        { id: 3, title: 'Wednesday', docs: 'Today is Wednesday!' },
        { id: 4, title: 'Thursday', docs: 'Today is Thursday!' },
        { id: 5, title: 'Friday', docs: 'Today is Friday!' },
        { id: 6, title: 'Saturday', docs: 'Today is Saturday!' },
        { id: 7, title: 'Sunday', docs: 'Today is Sunday!' },
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <Title title={this.state.title.titleTitle} sub={this.state.title.sub}></Title>
        <Schedule schedule={this.state.scheduleDay}></Schedule>
        <Mantra docs={this.state.mantra}></Mantra>
        {/* <Todos></Todos> */}
      </div>
    )
  }
}

export default App
