import React, { Component } from 'react'

class Todos extends Component {
  render() {
    let todayTodoList = []
    let todoProps = this.props.todo
    //console.log('day:', this.props.selectedDay)
    //console.log('todoProps is: ', todoProps)
    for (let i = 0; i < todoProps.length; i++) {
      if (Number(todoProps[i].dayid) === this.props.selectedDay) {
        //console.log(todoProps[i].dayid)
        //debugger
        //console.log(todoProps[i].docs)
        todayTodoList.push(
          <li>
            <span>{todoProps[i].docs}</span>
            <input
              type="checkbox"
              checked={todoProps[i].checked}
              // checked={this.props.checkedTodos}
              onChange={this.props.handleChange}
            />
          </li>,
        )
      }
    }
    return (
      <label>
        {/* <span>Study React</span> */}
        {/* 이 부분을 WhatTodo state로 바꾸고자 한다. */}
        {/* <input
          type="checkbox"
          checked={this.props.checkedTodos}
          onChange={this.props.handleChange}
        /> */}
        {todayTodoList}
      </label>
    )
  }
}

export default Todos

{
  /* 
  //reference: http://i5on9i.blogspot.com/2015/12/reactjs-checkbox-onchange.html
// 할 일들을 checkbox형식으로 만들려고 했더니 위와 같은 에러가 나왔다. 
//그래서 'react checkbox'라고 검색했더니 아래와 같은 방식으로 코딩하면 된다고 한다. 
//앞으로 props, state, event handling을 하면서 아래와 같은 방식을 구축할 예정이다. 
class MyCheckbox extends React.Component {
  state = {
    checked: false
  };

  handleChange = (e) => {
    const { target: { checked } } = e;
    this.setState({ checked });
  };

  render() {
    return (
      <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
      />
    );
  }
} */
  /*
그리고 공식문서에서 checkbox를 쓴 예시를 보면
Reference: https://ko.reactjs.org/docs/forms.html
<label>
  Is going:
  <input
    name="isGoing"
    type="checkbox"
    checked={this.state.isGoing}
    onChange={this.handleInputChange} />
</label>
*/
}
