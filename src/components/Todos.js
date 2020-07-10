import React, { Component } from 'react'

class Todos extends Component {
  render() {
    return (
      <ui>
        <input type="checkbox" name="todo" value="Study react" />
        Study react
      </ui>
    )
  }
}

export default Todos

{
  /* 
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
}
